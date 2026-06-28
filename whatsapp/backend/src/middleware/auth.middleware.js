
import { verifyAccessToken } from '../utils/auth.utils.js';


export const authMiddleware = async (req, res, next) => {


    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(404).json({
            message: "Token not found"
        })
    }

    try {

        const decode = verifyAccessToken(token)

        req.userId = decode.id;
    } catch (error) {
        console.log(error)
    }

    next()

}