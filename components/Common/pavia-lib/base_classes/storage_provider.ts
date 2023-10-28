import { PaviaId } from "../pavia_id";
import { CloseAction, Node } from "./node";


export interface IStorageProvider {
    openStorageRoot(): Promise<Node>;

    /// <summary>
    /// obtain root of this storage hierachy, only if already open
    /// </summary>
    /// <returns>root node</returns>
    getStorageRoot(): Promise<Node>;

    /// <summary>
    /// close down and clean up, will including saving unless suppressed
    /// </summary>
    /// <param name="close_action">should any structural and metadata changes be discarded or committed?</param>
    /// <returns>success, false indicates commit failure and node still open</returns>
    closeStorageRoot(closeAction: CloseAction ): Promise<boolean>;
}

export abstract class StorageProvider implements IStorageProvider {

    // region PaviaStorage
    public abstract closeStorageRoot(closeAction: CloseAction): Promise<boolean>;
    public abstract openStorageRoot(): Promise<Node>;
    public abstract getStorageRoot(): Promise<Node>;
    // endregion

    public abstract readonly isCloud: boolean;

    public get isLocal(): boolean { return !this.isCloud; }


    protected abstract allocateRootNode(): Node;
    public abstract allocateChildNode(parent: Node, name: string, id: PaviaId | null): Node;
    protected abstract generateNodeId(): Node;

    // Not sure if we need this
    // protected Status.StatusInformation Status { get { return (Status.StatusInformation)API.Status; } }

    protected abstract getCommitDescription(): string;

    public statusReportingBegin(contextObject: any, numPasses: number, nodeCount: number): void {
        const num_steps: number = nodeCount * numPasses;
        // Status.NotifyBeginTask( context_object, GetCommitDescription(), num_steps );
    }

    public statusReportingUpdate(contextObject: any, num_steps: number): void {
        // Status.NotifyUpdateTask( contextObject, num_steps );
    }

    public StatusReportingEnd(contextObject: any): void {
        // Status.NotifyEndTask( context_object );
    }

    public commitPassesRequired(): number { return 0; }
    public async beginCommit(commitRoot: Node): Promise<any> { return null; }
    public async beginCommitPass(context: any, pass: number): Promise<boolean> { return false; }
    public async endCommitPass(context: any, pass: number): Promise<boolean> { return false; }
    public async endCommit(context: any): Promise<boolean> { return false; }
}
