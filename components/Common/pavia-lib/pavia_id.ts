import crypto from "crypto";

export class PaviaId {

    public id: string;

    public static readonly None = new PaviaId(null);

    constructor(id: string) {
        this.id = id;
    }

    static generateLocal(): PaviaId {
        const guid: string = crypto.randomUUID();;
        const txt: string = guid.replaceAll("-", "");	//don't want it to look like a GUID
        return new PaviaId(txt);
    }

    public get isValid(): boolean { return !!this.id; }

    public get isCloud(): boolean { return this.id.includes("-"); }

    public get isLocal(): boolean { return !this.id.includes("-"); }

    public toString(): string { return this.id; }

    // TODO: Can't overload comparison operators in typescript
}