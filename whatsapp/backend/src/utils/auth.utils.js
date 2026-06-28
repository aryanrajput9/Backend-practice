import jwt from 'jsonwebtoken';
import env from '../config/env.js'


export const generateAccessToken = async (userId) => {

    return jwt.sign({ id: userId }, env.JWT_ACESSTOTEN, {
        expiresIn: "15min"
    })

};

export const generateRefreshToken = async (userId) => {
    return jwt.sign({ id: userId }, env.JWT_REFRESHTOKEN, {
        expiresIn: "7d"
    })
}


export const verifyAccessToken = (token) => {

    const decode = jwt.verify(token, env.JWT_ACESSTOTEN);

    return decode

}
export const verifyRefreshToken = (token) => {
    const decode = jwt.verify(token, env.JWT_REFRESHTOKEN);
    return decode
}