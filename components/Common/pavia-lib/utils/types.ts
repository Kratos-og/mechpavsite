export class RemoteNodeCommitRequest {
    public paviaId: string;
    public name: string;
    public metadata: any;
    public fileType: string;
    public fileSize: number;
    public pendingAdded: RemoteNodeCommitRequestChild[] = [];
    public pendingDelete: string[];
    public tempId: string;
    public timestamps: any;
    public deleteFile: boolean = false;
    public version: number;
}

export class RemoteNodeCommitRequestChild {

    public name: string;
    public id: string;
    public openAutomatically?: boolean;
    public tempId: string;
    public editTimestamp: string;
}


export interface Update {

    paviaId: string
    name: string
    isRoot: string
    children: any[]
    version: number
    metadata: any,
    createdAt: string,
    updatedAt: string,
    cdnDistribution: string,
    fileName: string,
    fileSize: number,
    fileType: string,
    presignedUrl: string,
    tempId: string,
    editTimestamp: string,
    dataTimestamp: string,
    propertiesTimestamp: string,
    hierarchyTimestamp: string

}

export class RemoteNodeConfirmRequest {
    success: boolean
}