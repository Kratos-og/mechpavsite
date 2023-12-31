import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function products(req, res) {
    // If your Access Token is expired and you have a Refresh Token
    // `getAccessToken` will fetch you a new one using the `refresh_token` grant
    try {
        const { accessToken } = await getAccessToken(req, res, {
            authorizationParams: { audience: "https://api.pavia.io", }
        });

        res.status(200).json(accessToken);
    }
    catch (err) {
        res.status(401).json(err);
    }
});