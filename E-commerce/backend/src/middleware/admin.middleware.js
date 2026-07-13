import jwt from 'jsonwebtoken';
import env from '../config/env.js'
import ApiError from '../utils/apiresponse.js';
import adminModel from '../model/admin.model.js';


export const adminMiddleware = async (req, res, next) => {
    try {
        const adminHeader = req.headers.authorization;

        if (!adminHeader || !adminHeader.startsWith("Bearer ")) {
            throw new ApiError(401, "Unauthorized request");
        }

        const token = adminHeader.split(" ")[1];

        const decode = jwt.verify(token, env.JWT_ACCESSTOKEN);

        if (!decode) {
            throw new ApiError(401, "Invalid access token");
        }

        const admin = await adminModel.findById(decode.id);

        if (!admin) {
            throw new ApiError(404, "Admin not found");
        }

        req.admin = admin;

        next();

    } catch (error) {
        return res.status(error.statusCode || 401).json({
            success: false,
            message: error.message,
        });
    }
};