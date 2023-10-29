import { NodeType, RemoteStorageProvider } from "../remote_storage_provider";
import { Node } from "../base_classes/node";

export type MechLayout = {
    name: string,
    properties: { [key: string]: string }
}


export class MechOperations {

    private bearerTokenFunction: () => string | (() => Promise<string>);
    private provider: RemoteStorageProvider;
    private rootNode: Node;


    constructor(bearerTokenFunction: () => string | (() => Promise<string>)) {
        this.bearerTokenFunction = bearerTokenFunction;
    }


    public async getSavedMechs(): Promise<MechLayout[]> {
        if (!this.provider) {
            this.provider = new RemoteStorageProvider(NodeType.User, this.bearerTokenFunction);
        }
        const mechNode = await this.getMechNode();
        const mechLayouts: any[] = [];
        for (const child of mechNode.children) {
            const mechProperties: { [key: string]: string } = {};
            for (const property of child.enumeratePropertyNames()) {
                mechProperties[property] = child.getString(property);
            }
            mechLayouts.push({
                name: child.name,
                properties: mechProperties
            })
        }
        return mechLayouts;
    }

    public async saveChanges(mechLayouts: MechLayout[]) {
        if (!this.provider) {
            throw new Error("Must have fetched saved mechs before attempting to save");
        }

        const mechNode = await this.getMechNode();

        // First remove any children that no longer exist
        const currentChildren = mechNode.children.map(x => x.name);
        const childrenToSave = mechLayouts.map(x => x.name);
        const nodesToDelete = currentChildren.filter(x => !childrenToSave.includes(x));
        nodesToDelete.forEach(x => this.deleteNodeByName(mechNode, x));

        // Replace all for each mechLayout, ensure child. 
        for (const mechLayout of mechLayouts) {
            const layout = mechNode.ensureChild(mechLayout.name);
            const propertyNames = layout.enumeratePropertyNames();
            propertyNames.forEach(x => layout.clearProperty(x));
            Object.keys(mechLayout.properties).forEach(x => layout.setString(x, mechLayout.properties[x]));
        }

        await this.rootNode.commit();




    }


    private deleteNodeByName(parent: Node, child: string) {
        const nodeToDelete = parent.findChild(child);
        if (nodeToDelete) {
            parent.removeChild(nodeToDelete);
        }
    }

    private async getMechNode() {
        this.rootNode = await this.provider.openStorageRoot();
        const pavsNode = this.rootNode.ensureChild("Pavs");
        await pavsNode.open(2);
        const mechNode = pavsNode.ensureChild("MechPavs");
        return mechNode;
    }
}