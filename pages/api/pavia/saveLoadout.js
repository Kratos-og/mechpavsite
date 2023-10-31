
import { MechOperations } from '@/components/Common/pavia-lib/end_user/mech_operations';
import { getAccessToken } from '@auth0/nextjs-auth0';

const saveLoadout = async (req, res) => {
    try {
        const { accessToken } = await getAccessToken(req, res);
        const mechOperations = new MechOperations(() => accessToken);
        console.log(req.body)
        const savedMechs = await mechOperations.getSavedMechs();
        let isMod = false;
        let payload = savedMechs.map(mech => {
            if (mech.name == req.body?.name) {
                isMod = true;
                mech.properties = { ...req.body.properties }
            }
            return { ...mech };
        })
        if (!isMod) {
            payload.push({
                name: req.body?.name,
                properties: {
                    ...req.body?.properties
                }
            })
        }
        let results = await mechOperations.saveChanges(payload);

        res.status(200).json(results)
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}

export default saveLoadout;