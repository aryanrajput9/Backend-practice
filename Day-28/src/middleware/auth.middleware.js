import jwt from 'jsonwebtoken';
import env from '../config/env.js'
import Unauthorized from '../shared/error/Unauthorized.error.js';

export const authMiddleware = (req, res, next) => {
    try {

        const tooken = req.cookies.accessToken;

        const payload = jwt.verify(tooken, env.JWT_ACCESSESTOKEN);

        req.users = payload;
        next()
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            throw new Unauthorized("Access Token Expire")
        }
        throw new Unauthorized("Token not found")
    }

};

export const authorizationMiddleware = (req, res, next) => {
    try {
        if (req.user.role === "ADMIN" || req.user.role === "SUPER_ADMIN") {
            next()
        }
    } catch (error) {
        throw new Unauthorized("Invalid role")
    }
}

