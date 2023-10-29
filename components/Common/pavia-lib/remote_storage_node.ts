import { Node } from "./base_classes/node";
import { MetadataCollection } from "./metadata_collection";
import { PaviaId } from "./pavia_id";
import { RemoteStorageContext } from "./remote_storage_context";
import { PassType, RemoteStorageProvider } from "./remote_storage_provider";
import { baseAPIUrl } from "./utils/consts";
import { Debug } from "./utils/debug";
import { PaviaStorageError } from "./utils/errors";
import { RemoteNodeCommitRequest, RemoteNodeCommitRequestChild, Update } from "./utils/types";


export class RemoteStorageNode extends Node {

    private _cdnDistribution: string;
    private _fileDescriptor: string;
    private _version: number = 0;




    public constructor(storage: RemoteStorageProvider, parent: RemoteStorageNode, name: string = "", id: PaviaId = null) {
        super(storage, parent, name, id);
    }

    public static fromDate(storage: RemoteStorageProvider, parent: RemoteStorageNode, editTimestamp: string, name: string = "", id: PaviaId = null) {
        const storageNode = new RemoteStorageNode(storage, parent, name, id);
        if (!!editTimestamp) {
            storageNode.editingTimestamp = new Date();
        }
        return storageNode;
    }


    public static fromConfigResponse(storage: RemoteStorageProvider, parent: RemoteStorageNode, configResponse: Update, children: Update[]) {
        const id = new PaviaId(configResponse.paviaId);
        const storageNode = new RemoteStorageNode(storage, parent, configResponse.name, id);
        storageNode.addNodeValues(configResponse, children);
        storageNode._isOpen = true;
        return storageNode;
    }


    async hydrateNode(depth: number = 0): Promise<void> {
        const storageProvider = this._provider as RemoteStorageProvider;
        const response = await fetch(`${baseAPIUrl}/v1/${storageProvider._remoteRoute}?id=${this.id.id}&depth=${depth}`,
            {
                method: "GET",
                headers: new Headers({
                    'Authorization': `Bearer ${await storageProvider._getBearer()}`,
                    'Content-Type': 'application/json'
                })
            })
        const responseBody = await response.json();
        this.addNodeValues(responseBody[0], responseBody);
    }

    private addNodeValues(configResponse: Update, allConfigNodes: Update[]) {
        this.id = new PaviaId(configResponse.paviaId);
        this._version = configResponse.version;
        if (configResponse.metadata && Object.keys(configResponse.metadata).length > 0) {
            this._properties = new MetadataCollection();
            this._properties.setPropertyMap(configResponse.metadata);
        }

        if (configResponse.editTimestamp && !this.editingTimestamp) {
            this.editingTimestamp = this.ticksToDate(configResponse.editTimestamp)
        }
        if (configResponse.hierarchyTimestamp && !this.hierarchyTimestamp) {
            this.hierarchyTimestamp = this.ticksToDate(configResponse.hierarchyTimestamp)
        }
        if (configResponse.dataTimestamp && !this.dataTimestamp) {
            this.dataTimestamp = this.ticksToDate(configResponse.dataTimestamp)
        }
        if (configResponse.propertiesTimestamp && !this.propertyTimestamp) {
            this.propertyTimestamp = this.ticksToDate(configResponse.propertiesTimestamp)
        }

        this.setChildren(this._provider as RemoteStorageProvider, configResponse, allConfigNodes);

    }

    private dateToTicks(date: Date) {
        if (!date) {
            return "0";
        }
        const milliseconds = date.getTime();
        const bigInt = BigInt(milliseconds) * BigInt(1000)
        return bigInt.toString()
    }

    private ticksToDate(ticks: string) {
        if (!ticks) {
            return new Date(0);
        }
        const milliseconds = Number(BigInt(ticks) / BigInt(1000));
        return new Date(milliseconds);
    }

    private setChildren(storage: RemoteStorageProvider, configResponse: Update, allConfigNodes: Update[]): void {
        if (!configResponse.children || configResponse.children.length == 0) {
            return;
        }
        if (!this._children) {
            this._children = [];
        }

        for (const child of configResponse.children) {
            const existingChildren = this._children.filter(x => x.name == child.name);
            if (existingChildren.length === 0) {
                const existingConfigNode = allConfigNodes.filter(x => x.paviaId == child.paviaId);
                let node: RemoteStorageNode;
                if (existingConfigNode.length === 0) {
                    node = RemoteStorageNode.fromDate(storage, this, child.editTimestamp, child.name, new PaviaId(child.paviaId));
                }
                else {
                    node = RemoteStorageNode.fromConfigResponse(storage, this, existingConfigNode[0], allConfigNodes);
                }
                this._children.push(node);
            }
        }
    }

    private getResponseObject(response: Update[]): Update {
        if (this.id.isLocal) {
            const responseList = response.filter(x => x.tempId == this.id.id);
            if (responseList.length != 1) {
                Debug.logError("Unable to find node from response list");
                throw new PaviaStorageError("Unable to find node from response list");
            }
            return responseList[0];
        } else {
            const responseList = response.filter(x => x.paviaId === this.id.id);
            if (responseList.length != 1) {
                Debug.logError("This node has not been updated");
                throw new PaviaStorageError("Node has not been updated")
            }
            return responseList[0];
        }
    }

    private async uploadFile(response: Update, context: RemoteStorageContext) {
        throw new PaviaStorageError("File uploads not implemented for javascript library");
    }

    private update(response: Update, responses: Update[]) {
        this.addNodeValues(response, responses);
        if (this.hasHierarchyChanges) {
            this.getPendingDeleted().splice(0, this.getPendingDeleted().length);
            this.getPendingAdded().splice(0, this.getPendingAdded().length);
            this.markHierarchyCommitted();
        }
        if (this.hasDataChanges) {
            this.markDataCommitted();
        }
        if (this.hasStateChanges) {
            this.markStateCommitted();
        }
    }



    protected buildNodeState(): any {
        return {
            editingTimestamp: this.dateToTicks(this.editingTimestamp),
            propertiesTimestamp: this.dateToTicks(this.propertyTimestamp),
            hierarchyTimestamp: this.dateToTicks(this.hierarchyTimestamp),
            dataTimestamp: this.dateToTicks(this.dataTimestamp)

        }
    }


    protected async doFetch(): Promise<string> {
        throw new PaviaStorageError("Files not yet implemented");
    }

    public async getDataDescriptor() {
        throw new PaviaStorageError("Files not implemented");
    }

    public async getDataUri() {
        throw new PaviaStorageError("Files not implemented")
    }




    protected async doCommit_ProcessNodeBeforeChildren(context: any, pass: number): Promise<boolean> {
        const configContext = context as RemoteStorageContext;
        let response: Update;
        switch (pass) {
            case PassType.GatherChanges:
                return true;

            case PassType.WriteBlobs:
                try {
                    response = this.getResponseObject(configContext.configResponse);
                    // configContext.uploads.push(UploadFile(response, configContext));
                    return true;
                }
                catch
                {
                    return false;
                }

            case PassType.AssignIds:
                try {
                    response = this.getResponseObject(configContext.configResponse);
                    this.update(response, configContext.configResponse);
                    return true;
                }
                catch
                {
                    return false;
                }
        }
        return false;
    }


    protected override async doCommit_ProcessNodeAfterChildren(context: any, pass: number): Promise<boolean> {
        switch (pass) {
            case PassType.GatherChanges:
                try {
                    const configContext = context as RemoteStorageContext;
                    configContext.commitRequests.push(this.createCommitRequest());
                    return true;
                }
                catch
                {
                    return false;
                }

            case PassType.WriteBlobs:
                return true;

            case PassType.AssignIds:
                return true;
        }
        return false;
    }


    protected override async doOpen(depth: number): Promise<boolean> {
        try {
            await this.hydrateNode(depth);
            return true;
        }
        catch
        {
            return false;
        }
    }

    private createCommitRequest() {
        const commRequest = new RemoteNodeCommitRequest();

        commRequest.name = this.name;
        commRequest.version = this._version;
        if (this.id.isLocal) {
            commRequest.tempId = this.id.id;
        }
        else {
            commRequest.paviaId = this.id.id;
        }

        if (this.hasDataChanges) {
            // File has been cleared
            if (this.dataType == null && this.dataSize == 0) {
                commRequest.deleteFile = true;
            }
            // New file has been added
            else {
                commRequest.fileType = this.dataType;
                commRequest.fileSize = this.dataSize;
            }

        }
        if (this.hasHierarchyChanges) {
            commRequest.pendingAdded = this.pendingAdded.map(x => {
                const configChild = x as RemoteStorageNode;
                var child = new RemoteNodeCommitRequestChild();
                child.tempId = configChild.id.id;
                child.name = x.name;
                child.editTimestamp = x.editingTimestamp.getTime().toString();
                return child;
            });
            commRequest.pendingDelete = this.pendingDeleted.map((x: RemoteStorageNode) => x.id.id);
        }
        if (this.hasPropertyChanges) {
            if (this._properties != null) {
                commRequest.metadata = this._properties.getPropertyMap();
            }
            else {
                //remove properties
                commRequest.metadata = {};
            }
        }
        if (this.hasStateChanges) {
            commRequest.timestamps = this.buildNodeState();
        }

        return commRequest;
    }



}