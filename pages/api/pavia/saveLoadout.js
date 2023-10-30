
import { MechOperations } from '@/components/Common/pavia-lib/end_user/mech_operations';
import { getAccessToken } from '@auth0/nextjs-auth0';

const saveLoadout = async (req, res) => {
    try {
        const { accessToken } = await getAccessToken(req, res);
        const mechOperations = new MechOperations(() => accessToken);
        console.log(req.body)
        const savedMechs = await mechOperations.getSavedMechs();
        let results = await mechOperations.saveChanges([{
            name: req.body?.name,
            properties: {
                ...req.body?.properties
            }
        }]);

        res.status(200).json(results)
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}

export default saveLoadout;