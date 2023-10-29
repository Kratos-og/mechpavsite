import { AssertionError, NotSupportedError } from "./utils/errors";
import { CloseAction, Node } from "./base_classes/node";
import { StorageProvider } from "./base_classes/storage_provider";
import { PaviaId } from "./pavia_id";
import { RemoteStorageNode } from "./remote_storage_node";
import { baseAPIUrl } from "./utils/consts";
import { RemoteNodeConfirmRequest, Update } from "./utils/types";
import { RemoteStorageContext } from "./remote_storage_context";
import { Debug } from "./utils/debug";

export class RemoteStorageProvider extends StorageProvider {


    private _rootNode: RemoteStorageNode;
    private _lastUpdated: Date;
    public _remoteRoute: string;
    public _getBearer: () => string | (() => Promise<string>);
    private currentTaskContext: RemoteStorageContext;



    constructor(type: NodeType, getBearerFunction: () => string | (() => Promise<string>)) {
        super();
        if (type == NodeType.Config) {
            this._remoteRoute = "config";
        }
        else if (type == NodeType.User) {
            this._remoteRoute = "user/storage";
        }
        else {
            throw new AssertionError("Node type not supported");
        }
        this._getBearer = getBearerFunction;
    }


    public async closeStorageRoot(closeAction: CloseAction.None): Promise<boolean> {
        if (!!this._rootNode) {
            if (await this._rootNode.closeRoot(closeAction)) {
                return false;
            }
            this._rootNode = null;
        }
        this._lastUpdated = null;
        return true;
    }

    protected allocateRootNode(): Node {
        return new RemoteStorageNode(this, null, null, null);
    }

    public commitPassesRequired(): number { return 3; }

    public async beginCommit(commitRoot: Node): Promise<any> { return new RemoteStorageContext(); }



    public async openStorageRoot(): Promise<Node> {
        if (!!this._rootNode && this._lastUpdated > new Date(Date.now() - 15 * 60)) {
            return this._rootNode;
        }
        const response = await fetch(baseAPIUrl + "/v1/" + this._remoteRoute, {
            headers: new Headers({
                'Authorization': `Bearer ${await this._getBearer()}`,
                'Content-Type': 'application/json'
            }),
        });

        const body: Update[] = await response.json();
        const baseNode = RemoteStorageNode.fromConfigResponse(this, null, body[0], body);
        baseNode._isOpen = true;
        this._rootNode = baseNode;
        this._lastUpdated = new Date(Date.now());
        return baseNode;
    }
    public getStorageRoot(): Promise<Node> {
        return new Promise((resolve) => resolve(this._rootNode));
    }
    public isCloud = true;

    public allocateChildNode(parent: Node, name: string, id: PaviaId = null): Node {
        return new RemoteStorageNode(this, parent as RemoteStorageNode, name, id);
    }
    protected generateNodeId(): Node {
        throw new NotSupportedError("Remote ID's only come from cloud services");
    }
    protected getCommitDescription(): string {
        return "uploading";
    }

    private async sendCommit(context: RemoteStorageContext) {
        try {
            const response = await fetch(baseAPIUrl + "/v1/" + this._remoteRoute,
                {
                    method: "POST",
                    body: JSON.stringify(context.commitRequests),
                    headers: new Headers({
                        'Authorization': `Bearer ${await this._getBearer()}`,
                        'Content-Type': 'application/json'
                    })
                });
            if (response.status < 200 || response.status > 299) {
                throw new Error("Unable to send to server");
            }
            const responseBody = await response.json();
            context.configResponse = responseBody.updates;
            context.commitId = responseBody.commitId;
            return true;
        } catch (error) {
            Debug.logError(error);
            return false;
        }
    }
    private async confirmCommit(context: RemoteStorageContext): Promise<boolean> {
        try {
            const body = new RemoteNodeConfirmRequest();
            body.success = context.uploadSuccess;
            const response = await fetch(baseAPIUrl + "/v1/" + this._remoteRoute + "/" + context.commitId,
                {
                    method: "POST",
                    headers: new Headers({
                        'Authorization': `Bearer ${await this._getBearer()}`,
                        'Content-Type': 'application/json'
                    }),
                    body: JSON.stringify(body)
                });
            if (response.status < 200 || response.status > 299) {
                throw new Error("Unable to confirm commit");
            }
            const responseBody = await response.json();
            context.configResponse = responseBody.updates;
            return context.uploadSuccess;

        } catch (error) {
            Debug.logError(error);
            return false;
        }

    }

    public async beginCommitPass(context: any, pass: number): Promise<boolean> {
        const configContext = context as RemoteStorageContext;
        switch (pass) {
            case PassType.GatherChanges:
                return true;
            case PassType.WriteBlobs:
                return true;
            case PassType.AssignIds:
                const result = await this.confirmCommit(configContext)
                return result;

            default:
                return false;
        }
    }


    public async endCommitPass(context: any, pass: number): Promise<boolean> {
        const configContext = context as RemoteStorageContext;
        switch (pass) {
            case PassType.GatherChanges:
                const result = await this.sendCommit(configContext);
                return result;
            case PassType.WriteBlobs:
                await Promise.all(configContext.uploads);
                return true;
            case PassType.AssignIds:
                return true;
            default:
                return false;
        }
    }

    public async endCommit(context: any): Promise<boolean> { return true; }
}

export enum NodeType {
    Config,
    User
}
export enum PassType {
    GatherChanges,
    WriteBlobs,
    AssignIds
}
