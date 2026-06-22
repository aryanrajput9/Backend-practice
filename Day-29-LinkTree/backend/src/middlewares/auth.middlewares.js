import { cookie } from 'express-validator';
import jwt from 'jsonwebtoken';
import env from '../config/env.js';
import userModel from '../model/user.model.js'


const authMiddleware = async (req, res, next) => {

    let token = req.cookies.token;
    if (!token) return res.status(401).json({
        message: "token not found"
    })
    try {
        const decode = jwt.verify(token, env.JWT_TOKEN);
        req.user = decode;

        next()
    } catch (error) {
        return res.status(401).json({
            message: "invalid token"
        })
    }



};

export default authMiddleware