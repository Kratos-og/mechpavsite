import { AssertionError } from "./errors";

export class Debug{
    static assert(predicate: boolean, errorMessage?: string){
        if(!predicate){
            throw new AssertionError(errorMessage);
        }
    }

    static logError(message: string){
        console.error(message);
    }

    static logWarning(message: string){
        console.warn(message);
    }
}