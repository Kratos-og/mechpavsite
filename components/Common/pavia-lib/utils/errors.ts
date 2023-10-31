export class PaviaStorageError extends Error {
    constructor(message?: string) {
        super(message);
    }
}

export class AssertionError extends PaviaStorageError {
    constructor(message: string = "Assertion Error thrown"){
        super(message);
    }
}

export class NotSupportedError extends PaviaStorageError {
    constructor(message: string = "This operation is not supported"){
        super(message);
    }
}

