import { PaviaId } from "../pavia_id";
import lodash from "lodash";
import { IStorageProvider, StorageProvider } from "./storage_provider";
import { Debug } from "../utils/debug";
import { MetadataCollection } from "../metadata_collection";

interface IRootNode {
    /// <summary>
    /// root init needs to be explicit
    /// </summary>
    /// <returns></returns>
    openRoot(): Promise<void>

    /// <summary>
    /// root shutdown needs to be explicit
    /// </summary>
    /// <param name="close_action">should we commit or discard any pending changes?</param>
    /// <returns>success, if false, still needs committing</returns>
    closeRoot(closeAction: CloseAction): Promise<boolean>
}

export abstract class Node implements IRootNode {

    protected id: PaviaId;


    private _name: string;
    public get name() { return this._name }

    public GetId(): PaviaId { return this.id; }

    private _editingTimestamp: Date = new Date(0);
    public get editingTimestamp(): any {
        if (this._commitTimestamp && this._commitTimestamp.getTime() != 0) {
            return this._commitTimestamp;
        }

        return this._editingTimestamp;
    }

    public set editingTimestamp(value: Date) {
        this._editingTimestamp = value;
    }


    public propertyTimestamp: Date;

    /// <summary>
    /// specifically when child structure was last edit committed (UTC)
    /// </summary>
    public hierarchyTimestamp: Date;

    /// <summary>
    /// specifically when data was last edit committed (UTC)
    /// </summary>
    public dataTimestamp: Date;

    public _isOpen: boolean = false;

    public get isOpen() { return this._isOpen };

    protected _properties: MetadataCollection | any;
    private _dataType: string;
    private _dataSize: number;
    protected _children: Node[] | null;

    /// <summary>
    /// does this node have any metadata properties?
    /// </summary>
    /// <remarks>See GetX/SetX metadata access methods</remarks>
    public get hasProperties(): boolean { return this._isOpen && this._properties != null && this._properties.HasProperties }

    /// <summary>
    /// is there a data blob?
    /// </summary>
    /// <remarks>See BeginDataRead/EndDataRead access methods</remarks>
    public get hasData(): boolean { return this._isOpen && !!this._dataType }

    /// <summary>
    /// what type of data blob is it? (file extension past first dot, always lowercase)
    /// </summary>
    public get dataType() { return this._dataType; }

    /// <summary>
    /// how much data is there?
    /// </summary>
    public get dataSize() { return this._dataSize }

    /// <summary>
    /// does this node have child nodes?
    /// </summary>
    // public bool HasChildren => IsOpen && _Children != null && _Children.Count > 0;

    public get hasChildren(): boolean { return this._isOpen && !!this._children && this._children.length > 0; }

    /// <summary>
    /// how many child nodes? (safe to call if not open, returns 0)
    /// </summary>
    // public int ChildCount => (IsOpen && _Children != null) ? _Children.Count : 0;

    public get childCount(): number { return (this._isOpen && !!this._children) ? this._children.length : 0 }

    /**
     * this returns a copy of children, do not modify this
     */
    public get children(): Node[] { return !!this._children ? lodash.cloneDeep(this._children) : [] }

    private _parent: Node;

    public get parent() {
        return this._parent;
    }

    /**
     * This should not be accessed outside the npm package
     */
    public _provider: StorageProvider;

    protected _isSynchronisedCommit: boolean;

    protected _commitTimestamp: Date;

    protected _stateCommitRequired: boolean;

    constructor(storage: IStorageProvider, parent: Node, name: string = "", id: PaviaId = null) {
        this._provider = storage as StorageProvider;
        this._parent = parent;
        if (!id || !id.isValid) {
            this.id = PaviaId.None;
        } else {
            this.id = id;
        }
        this._name = name;
    }

    async openRoot(): Promise<void> {
        Debug.assert(this._name == null, "Roots shouldn't be named, or you are initialising a child node with OpenRoot");
        Debug.assert(this._parent == null, "Roots shouldn't have a parent node, or you are initialising a child node with OpenRoot");

        //manually get basic node info set up
        await this.doInit();

        //roots are auto-opened
        await this.open();
    }

    async closeRoot(closeAction: CloseAction) {
        Debug.assert(this._name == null, "Roots shouldn't be named, or you are shutting down a child node with CloseRoot");
        Debug.assert(this._parent == null, "Roots shouldn't have a parent node, or you are shutting down a child node with CloseRoot");

        if (closeAction == CloseAction.CommitChanges) {
            if (!await this.commit()) {
                await this.close();
                return false;
            }
        }
        else if (closeAction == CloseAction.None) {
            //check for lost changes (dev only)
            const hasNoChanges: boolean = !this.hasAnyChanges; //nothing to commit anyway
            const onlyStateChanges: boolean = this.hasOnlyStateChangesAll();	//can safely discard if only state changes (e.g. assignment of missing IDs can be discarded if no data changes that could reference them)

            Debug.assert(hasNoChanges || onlyStateChanges, "Closing storage root with pending changes. Pass API.CloseAction.DiscardChanges if this was deliberate.");
        }
        else {
            //discarding changes
        }
        return true;
    }


    public async open(depth = 0): Promise<boolean> {
        if (!this._isOpen) {
            //this node (and maybe sub-tree) needs opening
            if (!await this.doOpen(depth)) {
                return false;
            }
            this._isOpen = true;
        }
        else {
            //is open already, do we need to check sub-tree?
            if (depth > 0) {
                //progressive walk to needed depth to check to make sure all actually open
                if (this._children) {
                    for (var c of this._children) {
                        if (!await c.open(depth - 1))	//RECURSE: next level down
                        {
                            return false;
                        }
                    }
                }
            }
        }

        return true;
    }

    public async close(): Promise<void> {
        if (this._isOpen) {
            //TODO: release allocated sub-structure, return to pre-open state
            //...

            this._isOpen = false;
        }
    }

    /// <summary>
    /// any changes that need saving to this node or children?
    /// </summary>
    /// <returns></returns>
    public hasChanges(): boolean {
        return this.hasChangesAll();
    }

    private hasChangesAll(): boolean {
        if (this.hasAnyChanges) {
            return true;
        }
        for (let c of this._children) {
            if (c.hasChangesAll()) {
                return true;
            }
        }
        return false;
    }


    // public void OverrideNextCommitTimestamp( DateTime commit_timestamp )
    // 	{
    // 		_CommitTimestampOverride = commit_timestamp;
    // 	}
    // 	DateTime? _CommitTimestampOverride = null;


    public async commit(): Promise<boolean> {
        return await this.commitInternal(false);
    }

    private async commitInternal(isSynchronisedCommit: boolean): Promise<boolean> {
        //validate stable parents
        let n: Node = this._parent;
        while (n != null) {

            //state changes are needed up the hierarchy anyway, so we can ignore them
            if (n.hasAnyChanges)// && !n.HasOnlyStateChanges)
            {
                //upgraded to error, as not easy to handle gracefully, requires higher level fixes to client code (i.e. commit new structure before hand)
                Debug.logError(`Attempt to commit child node '${this._name}' when parent node '${n._name}' has pending changes`);
                return false;
            }
            //walk up ancestor chain
            n = n._parent;
        }

        //redirect to root for actual commit so we get full timestamp update
        if (this._parent != null) {
            return await this.root.commitInternal(isSynchronisedCommit);
        }

        //calc timestamp to use (NOTE: Commit must always clear _CommitTimestampOverride so that it can only affect one commit
        let commitTimestamp: Date;
        if (!!this._commitTimestampOverride) {
            //can be overridden (e.g. during a sync, to ensure specific editing timestamp)
            commitTimestamp = this._commitTimestampOverride;
            this._commitTimestampOverride = null;
        }
        else {
            commitTimestamp = Node.getIncreasingNow();
        }

        //anything to do?
        let count: number = this.getStagedCount();
        let success: boolean = true;
        if (count > 0) {
            //'now'
            commitTimestamp = commitTimestamp; //temp, only valid during commit
            this._isSynchronisedCommit = isSynchronisedCommit;

            //mark any changed nodes and parents up from them as needing state change
            //this is needed so that a) whole branches can be checked for being up to date, and b) ensures parents are still written to storage with the new edit timestamp even if no other changes
            //must be done before commits accually happen
            this.propagateStateEdits(commitTimestamp, isSynchronisedCommit);

            //prep
            const numberOfPasses: number = this._provider.commitPassesRequired();

            //obtain context object
            const context: any = await this._provider.beginCommit(this);
            Debug.assert(context != null, "No context object for commit processing");

            //set up progress reporting
            this._provider.statusReportingBegin(context, numberOfPasses, count);
            //process requested passes
            for (let pass: number = 0; pass < numberOfPasses; pass++) //0, 1, 2, etc
            {
                if (!await this._provider.beginCommitPass(context, pass)) {
                    success = false;
                    break;
                }
                if (!await this.processChangedNodes(context, pass, commitTimestamp, isSynchronisedCommit))	//call Commit_ProcessNode on all changed nodes (depth first walk)
                {
                    success = false;
                    break;
                }
                if (!await this._provider.endCommitPass(context, pass)) {
                    success = false;
                    break;
                }
            }

            //Mark committed and update edit timestamp
            if (success) {
                this.markAllCompleted(isSynchronisedCommit);
            }

            //temp, only valid during commit
            this.resetCommitTransients();

            if (success) {
                //commit cleanup
                await this._provider.endCommit(context);
            }

            this._provider.StatusReportingEnd(context);
        }

        return success;
    }

    public get root(): Node {
        let n: Node = this;
        while (n._parent != null) {
            n = n._parent;
        }
        return n;
    }

    public OverrideNextCommitTimestamp(commitTimestamp: Date): void {
        this._commitTimestampOverride = commitTimestamp;
    }
    _commitTimestampOverride: Date = null;

    private resetCommitTransients(): void {
        //nolonger committing
        this._commitTimestamp = new Date(0);
        this._isSynchronisedCommit = false;

        //all children
        if (this._children) {
            for (let c of this._children) {
                c.resetCommitTransients();
            }
        }
    }


    // region Change tracking

    public get hasOnlyStateChanges() { return this.hasStateChanges && !this.hasPropertyChanges && !this.hasHierarchyChanges && !this.hasDataChanges; }

    private get hasAnyChanges(): boolean { return this.hasPropertyChanges || this.hasHierarchyChanges || this.hasDataChanges || this.hasStateChanges; }

    public get hasPropertyChanges(): boolean { return this.propertyTimestamp > this._editingTimestamp; }

    public get hasHierarchyChanges(): boolean { return this.hierarchyTimestamp > this._editingTimestamp; }

    public get hasDataChanges(): boolean { return this.dataTimestamp > this._editingTimestamp; }

    public get hasStateChanges(): boolean { return this._stateCommitRequired; }

    // endregion

    public getStagedCount(): number {
        let count: number = this.hasAnyChanges ? 1 : 0;
        if (this.hasChildren) {
            for (let c of this._children) {
                count += c.getStagedCount();
            }
        }
        return count;
    }

    public static getIncreasingNow(): Date {
        let now: Date = new Date(Date.now());	//using UTC for global synchronisation of changes made (it's also a lot faster)


        //clash?
        if (now.getTime() <= this._lastNowTicks) {
            //advance by one to create synthetic (non-clashing) time for now
            this._lastNowTicks++;
            now = new Date(this._lastNowTicks);
        }
        else {
            //track most recent actual time
            this._lastNowTicks = now.getTime();
        }

        return now;
    }

    static _lastNowTicks: number;


    protected markPropertiesEdited(): void {
        this.propertyTimestamp = Node.getIncreasingNow();
    }

    protected markPropertiesCommitted(): void {
        if (!this._isSynchronisedCommit) {
            Debug.assert(this._commitTimestamp.getTime() != 0, "Can only mark committed during a commit.");
            if (this._commitTimestamp.getTime() != 0) {
                this.propertyTimestamp = this._commitTimestamp;
            }
        }
    }

    protected markHierarchyEdited(): void {
        this.hierarchyTimestamp = Node.getIncreasingNow();
    }
    /// <summary>
    /// indicate hierarchy has been committed
    /// </summary>
    protected markHierarchyCommitted(): void {
        if (!this._isSynchronisedCommit) {
            Debug.assert(this._commitTimestamp.getTime() != 0, "Can only mark committed during a commit.");
            if (this._commitTimestamp.getTime() != 0) {
                this.hierarchyTimestamp = this._commitTimestamp;
            }
        }
    }

    protected markDataEdited(): void {
        this.dataTimestamp = Node.getIncreasingNow();
    }
    /// <summary>
    /// indicate data has been committed
    /// </summary>
    protected markDataCommitted(): void {
        if (!this._isSynchronisedCommit) {
            Debug.assert(this._commitTimestamp.getTime() != 0, "Can only mark committed during a commit.");
            if (this._commitTimestamp.getTime() != 0) {
                this.dataTimestamp = this._commitTimestamp;
            }
        }
    }


    /// <summary>
    /// indicate node state has been committed
    /// </summary>
    protected markStateCommitted(): void {
        //state flag doesn't need same sync/checks as timestamps do, so leave until commit cycle completes 
        //so that MarkAllCompleted can tell something changed in ancestor nodes which don't have data changes flagged but still need a way to tell

    }

    private markAllCompleted(isSynchronisedCommit: boolean): void {
        if (this.hasAnyChanges) {
            //remember which had changed
            const was_properties = this.hasPropertyChanges;
            const was_hierarchy = this.hasHierarchyChanges;
            const was_data = this.hasDataChanges;

            //can now mark as up to date overall
            this.editingTimestamp = this._commitTimestamp;

            //check that is was marked as clean
            if (!isSynchronisedCommit) {
                Debug.assert(!was_properties || this.propertyTimestamp === this._commitTimestamp, `commit processing failed to mark Properties as committed: ${this.name}`);
                Debug.assert(!was_hierarchy || this.hierarchyTimestamp === this._commitTimestamp, `commit processingfailed to mark Hierarchy as committed: ${this.name}`);
                Debug.assert(!was_data || this.dataTimestamp === this._commitTimestamp, ` commit processing failed to mark Data as committed: ${this.name}`);

                //can't be marked as committed as for ancestor nodes (no data changes) we need a way to still get into this if statement to sync edit timestamp
                //API.Assert( !HasStateChanges, $"{GetType().Name} commit processing failed to mark State as committed: {Name}" );
            }

            //clear state flag
            this._stateCommitRequired = false;	//(directly modified since MarkStateCommitted doesn't do anything normally for synchronised commit)
        }

        //children
        if (this._children) {
            for (let c of this._children) {
                c.markAllCompleted(isSynchronisedCommit);
            }
        }
    }

    /// <summary>
    /// ensure state of edited nodes and all parents of modified nodes are marked as needing a state save
    /// NOTE: Also passes commit version to all affected nodes as they need this later
    /// </summary>
    propagateStateEdits(commitTimestamp: Date, isSynchronisedCommit: boolean): boolean {
        //visit all child nodes
        let anyBranchChanges: boolean = false;
        if (this._children) {
            for (let child of this._children) {
                if (child.propagateStateEdits(commitTimestamp, isSynchronisedCommit)) {
                    anyBranchChanges = true;
                }
            }
        }

        //on the way back up: do we or any children have any changes?
        if (this.hasAnyChanges || anyBranchChanges) {
            //init node with this commit in preparation
            this._commitTimestamp = commitTimestamp;
            this._isSynchronisedCommit = isSynchronisedCommit;

            //mark this parent as needing save even if no other changes
            //(the state needs saving so that the new EditTimestamp is stored. This way we can see if whole branches contain changes with ease.)
            this.markStateEdited();
            return true;
        }

        //no changes beneath
        return false;
    }

    protected markStateEdited() {
        this._stateCommitRequired = true;
    }

    private async processChangedNodes(context: any, pass: number, commitTimestamp: Date, isSynchronisedCommit: boolean): Promise<boolean> {
        const process = this.hasAnyChanges;
        if (process) {
            //nodes need the commit timestamp to validate and mark changes properly
            this._commitTimestamp = commitTimestamp;
            this._isSynchronisedCommit = isSynchronisedCommit;

            //derived implementation to process changes
            if (!await this.doCommit_ProcessNodeBeforeChildren(context, pass)) {
                //failed, abort
                return false;
            }
        }

        //children (after parent so that any structure children exist relative to has been set up)
        if (this._children) {
            for (let c of this._children) {
                if (!await c.processChangedNodes(context, pass, commitTimestamp, isSynchronisedCommit)) {
                    return false;
                }
            }
        }

        if (process) {
            //progress update
            this._provider.statusReportingUpdate(context, 1);

            //derived implementation to process changes
            if (!await this.doCommit_ProcessNodeAfterChildren(context, pass)) {
                //failed, abort
                return false;
            }
        }

        return true;
    }

    private hasOnlyStateChangesAll(): boolean {
        if (!this.hasOnlyStateChanges) {
            return false;
        }
        for (var c of this._children) {
            if (!c.hasOnlyStateChangesAll()) {
                return false;
            }
        }
        return true;
    }

    protected abstract doCommit_ProcessNodeBeforeChildren(context: any, pass: number): Promise<boolean>;
    protected abstract doCommit_ProcessNodeAfterChildren(context: any, pass: number): Promise<boolean>;

    protected async doInit(): Promise<boolean> {
        return true;
    }
    protected async doOpen(depth: number): Promise<boolean> {
        return true;
    }

    public getString(name: string, fallback: string = null): string {
        Debug.assert(this.isOpen, "Can't get properties of a closed node");
        if (this._properties != null) {
            return this._properties.getString(name, fallback);
        }
        return fallback;
    }

    public getInt(name: string, fallback: number = 0): number {
        Debug.assert(this.isOpen, "Can't get properties of a closed node");
        if (this._properties != null) {
            return this._properties.getInt(name, fallback);
        }
        return fallback;
    }

    public getBool(name: string, fallback: boolean = false): boolean {
        Debug.assert(this.isOpen, "Can't get properties of a closed node");
        if (this._properties != null) {
            return this._properties.getBool(name, fallback);
        }
        return fallback;
    }

    public setString(name: string, value: string): boolean {
        Debug.assert(this._isOpen, "Can't set properties of a closed node");
        if (this._properties == null) {
            this._properties = new MetadataCollection();
        }
        if (this._properties.setString(name, value)) {
            this.markPropertiesEdited();
            return true;
        }
        return false;
    }

    public setInt(name: string, value: number): boolean {
        Debug.assert(this._isOpen, "Can't set properties of a closed node");
        if (this._properties == null) {
            this._properties = new MetadataCollection();
        }
        if (this._properties.setInt(name, value)) {
            this.markPropertiesEdited();
            return true;
        }
        return false;
    }

    public setBool(name: string, value: boolean) {
        Debug.assert(this.isOpen, "Can't set properties of a closed node");
        if (this._properties == null) {
            this._properties = new MetadataCollection();
        }
        if (this._properties.setBool(name, value)) {
            this.markPropertiesEdited();
            return true;
        }
        return false;
    }

    public clearProperty(name: string): void {
        Debug.assert(this.isOpen, "Can't clear properties of a closed node");
        if (this._properties != null) {
            this._properties.clearProperty(name);
            this.markPropertiesEdited();
        }
    }

    // TODO: for now this just returns a list
    // TODO: this wont work for now
    public enumeratePropertyNames(): string[] {
        Debug.assert(this.isOpen, "Can't enumerate properties of a closed node");
        if (this._properties != null && this._properties.getPropertyMap() != null) {
            // for (const key of this._properties.getPropertyMap().Keys) {
            //     return key;
            // }
            return Object.keys(this._properties.getPropertyMap())
        }
        return []
    }


    private static invalidFileCharacters = "<>:\"/\\|?*";
    private static reservedFileNames = ["CON", "PRN", "AUX", "NUL", "COM1", "COM2", "COM3", "COM4", "COM5", "COM6", "COM7", "COM8", "COM9", "LPT1", "LPT2", "LPT3", "LPT4", "LPT5", "LPT6", "LPT7", "LPT8", "LPT9"];


    public static sanitiseNodeName(name: string): string {
        //null check
        if (!name) {
            return "unnamed";
        }

        //control characters and favourite windows chars (linux only hates forward slash)
        for (let i = 0; i < name.length; i++) {
            if (name.charCodeAt(i) < 32 || this.invalidFileCharacters.includes(name[i])) {
                name = name.slice(0, i) + "_" + name.slice(i + 1);
            }
        }

        //Windows doesn't like files ending with spaces or dots
        if (name.endsWith(" ")) {
            name = name.trim();
        }
        while (name.endsWith(".")) {
            name = name.slice(0, name.length - 1);
        }

        //reserved name checks (windows)
        if (this.reservedFileNames.includes(name.toUpperCase())) {
            return "_" + name;
        }

        //final empty check
        if (name.length == 0) {
            return "unnamed";
        }
        return name;
    }

    protected static validateNodeName(name: string): string {
        //check name
        const nodeName: string = this.sanitiseNodeName(name);
        if (nodeName != name) {
            Debug.logWarning(`New node name modified to conform to file system requirements. Was '${name}', now '${nodeName}'`);
        }
        return nodeName;
    }

    protected static validateNodeId(n: Node): void {
        if (!n.id.isValid) {
            //all new nodes are considered local (unless remote node which will change to cloud id, but only when committed successfully)
            n.id = PaviaId.generateLocal();
        }
    }

    public findChild(name: string): Node {
        Debug.assert(this.isOpen, "Can't access hierachy of a closed node");
        if (this._children) {
            for (const node of this._children) {
                if (node.name === name) {
                    return node;
                }
            }
        }
        return null;
    }

    public addChild(name: string): Node {
        Debug.assert(this.isOpen, "Can't modify hierachy of a closed node");
        //children must be uniquely named, so add must always check
        if (this.findChild(name) != null) {
            Debug.assert(false, `Storage node '${name}' already exists. AddChild failed.`);
            return null;
        }

        //add it
        name = Node.validateNodeName(name);
        const n = this._provider.allocateChildNode(this, name, null);
        if (n != null) {
            Node.validateNodeId(n);
            this.getChildren().push(n);
            this.getPendingAdded().push(n);
            this.markHierarchyEdited();

            //new nodes considred open
            n._isOpen = true;

            //ensure we at least write out metadata for the new child
            n.markStateEdited();
        }
        return n;
    }

    public ensureChild(name: string): Node {
        Debug.assert(this.isOpen, "Can't modify hierachy of a closed node");
        //existing?
        let n: Node = this.findChild(name);
        if (n == null) {
            //add new
            name = Node.validateNodeName(name);
            n = this._provider.allocateChildNode(this, name, null);
            if (n != null) {
                Node.validateNodeId(n);
                this.getChildren().push(n);
                this.getPendingAdded().push(n);
                this.markHierarchyEdited();
                n._isOpen = true; //a new node is considered open
            }
        }
        return n;
    }

    public async ensureChildCommitted(name: string): Promise<Node> {
        Debug.assert(this.isOpen, "Can't modify hierachy of a closed node");
        //existing?
        let n: Node = this.findChild(name);
        if (n == null) {
            //add new
            name = Node.validateNodeName(name);
            n = this._provider.allocateChildNode(this, name, null);
            if (n != null) {
                Node.validateNodeId(n);
                this.getChildren().push(n);
                this.getPendingAdded().push(n);
                this.markHierarchyEdited();
                n._isOpen = true; //a new node is considered open

                //attempt commit
                if (!await this.commit()) {
                    //failed, undo changes

                    const index = this.getChildren().indexOf(n);
                    this.getChildren().splice(index, 1);

                    const index1 = this.getPendingAdded().indexOf(n);
                    this.getPendingAdded().splice(index1, 1);

                    //can't really undo the MarkHierarchyEdited at the moment
                    return null;
                }
            }
        }
        return n;
    }

    public removeChild(nodeToDelete: Node): void {
        Debug.assert(this.isOpen, "Can't modify hierachy of a closed node");
        if (!this._children) {
            Debug.assert(false, "No children present on parent node for removal");
        }
        Debug.assert(this._children.includes(nodeToDelete), `No storage location '${nodeToDelete.name}' found under '{Name}'`);
        const index = this.getChildren().indexOf(nodeToDelete);
        this.getChildren().splice(index, 1);

        //mark as deleted (for commit)
        this.getPendingDeleted().push(nodeToDelete);
        this.markHierarchyEdited();
    }


    private getChildren(): Node[] {
        Debug.assert(this._isOpen, "Can't access hierachy of a closed node");
        if (!this._children) {
            this._children = [];
        }
        return this._children;
    }

    protected _pendingAdded: Node[];

    protected get pendingAdded(): Node[] { return (this._pendingAdded != null) ? lodash.cloneDeep(this._pendingAdded) : []; }


    protected getPendingAdded(): Node[] {
        if (!this._pendingAdded) {
            this._pendingAdded = [];
        }
        return this._pendingAdded;
    }

    protected _pendingDeleted: Node[];
    protected get pendingDeleted(): Node[] {
        return !!this._pendingDeleted ? this._pendingDeleted : [];
    }

    protected getPendingDeleted(): Node[] {
        if (!this._pendingDeleted) {
            this._pendingDeleted = [];
        }
        return this._pendingDeleted;
    }


    protected tempDataPath: string;


    // TODO: Data will work very differently in browser
    // public BeginDataWrite( string data_type=null ): string
    // 	{
    // 		API.Assert(IsOpen, "Can't write data to a closed node");
    // 		//validation
    // 		if(DataType==null)
    // 		{
    // 			if(data_type==null)
    // 			{
    // 				//no idea of type
    // 				throw new ArgumentNullException( "Must provide BLOB data type to BeginDataWrite on new storage node" );
    // 			}
    // 			else
    // 			{
    // 				DataType = null;
    // 			}
    // 		}
    // 		else
    // 		{
    // 			if(data_type==null)
    // 			{
    // 				//known type
    // 				data_type = DataType;
    // 			}
    // 			else if(string.Compare( data_type, DataType, true/*ignore case*/ )==0)
    // 			{
    // 				//same type
    // 			}
    // 			else
    // 			{
    // 				//different tyep
    // 				throw new ArgumentException( $"Can't change BLOB data type from '{DataType}' to '{data_type}' when calling BeginDataWrite" );
    // 			}
    // 		}

    // 		//reset
    // 		DataSize = 0;
    // 		DataType = data_type.ToLower();	//always kept as lowercase
    // 		if(TempDataPath==null)
    // 		{
    // 			TempDataPath = System.IO.Path.GetTempFileName();
    // 		}

    // 		return TempDataPath;
    // 	}


}


export enum CloseAction {
    CommitChanges,
    DiscardChanges,
    None
}
