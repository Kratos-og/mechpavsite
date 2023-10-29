
import { MechOperations } from '@/components/Common/pavia-lib/end_user/mech_operations';
import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';
const getUserSavedMech = async (req, res) => {
    try {
        const { accessToken } = await getAccessToken(req, res);
        console.log(accessToken)
        const mechOperations = new MechOperations(() => accessToken);
        const savedMechs = await mechOperations.getSavedMechs();
        res.status(200).json(savedMechs)
    }
    catch (err) {
        console.log(err);
        res.status(401).json(err);
    }
}

export default getUserSavedMech;