import jwt from 'jsonwebtoken';
import env from '../config/env.js'
import userModel from '../model/user.model.js';
import ApiError from '../utils/apiresponse.js';
import adminModel from '../model/admin.model.js';




export const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;


        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                message: "Unauthorized",
            });
        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token, env.JWT_ACCESSTOKEN);

        const user = await userModel.findById(decoded.id);

        if (!user) {
            return res.status(401).json({
                message: "User not found",
            });
        }

        req.user = user;


        next();
    } catch (error) {
        return res.status(401).json({
            message: "Invalid or expired token",
        });
    }
};



// Password1