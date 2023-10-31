import { RemoteNodeCommitRequest, Update } from "./utils/types";


export class RemoteStorageContext{

    commitId: string;
    uploads: Promise<any>[];
    commitRequests: RemoteNodeCommitRequest[];
    configResponse: Update[];
    uploadSuccess: boolean;

    constructor(){
        this.commitRequests = [];
        this.configResponse = [];
        this.uploadSuccess = true;
        this.uploads = [];
    }

}