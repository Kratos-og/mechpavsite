export class MetadataCollection {


    private _propertyMap: any = {};

    public get hasProperties(): boolean {
        return this._propertyMap != null && Object.keys(this._propertyMap).length > 0;
    }

    public getString(name: string, fallback: string = null): string {
        if (this._propertyMap != null && !!this._propertyMap[name]) {
            return this._propertyMap[name];
        }
        return fallback;
    }

    public getInt(name: string, fallback: number = 0): number {
        if (this._propertyMap != null && this._propertyMap[name]) {
            const integer = parseInt(this._propertyMap[name]);
            if (!Number.isNaN(integer)){
                return integer;
            }
        }
        return fallback;
    }

    public getBool(name: string, fallback = false): boolean {
        if(this._propertyMap!=null && this._propertyMap[name])
        {
            return this._propertyMap[name] === "true";
        }
        return fallback;
    }

    public setString(name: string, value: string): boolean {
        if (this._propertyMap == null) {
            this._propertyMap = {}
        };

        if (this._propertyMap[name]) {
            if (this._propertyMap[name] == value){
                return false;
            }
        }
        else {
            if (!value) {
                //no need to store an empty string when entry not present
                return false;
            }
        }

        this._propertyMap[name] = value;
        return true;
    }

    public setInt(name: string, value: number) {
        return this.setString(name, value.toString());
    }

    public setBool(name: string, value: boolean): boolean {
        return this.setString(name, value ? "true" : "false");
    }

    /// <summary>
    /// remove a property completely from the collection
    /// </summary>
    /// <param name="name"></param>
    public clearProperty(name: string) {
        if (this._propertyMap != null) {
            delete this._propertyMap[name];
        }
    }

    public getPropertyMap() {
        return this._propertyMap;
    }

    public setPropertyMap(metadata: any): void {
        this._propertyMap = metadata;
    }

}