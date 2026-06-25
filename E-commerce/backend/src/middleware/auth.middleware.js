import jwt from 'jsonwebtoken';
import env from '../config/env.js'
import userModel from '../model/user.model.js';



export const authMiddlerware = async (req, res, next) => {
    const accessToken = req.cookies.accesstoken;

    const decode = jwt.verify(accessToken, env.JWT_ACCESSTOKEN);

    const user = await userModel.findById(decode.id);

    res.user = user;

    next()
}