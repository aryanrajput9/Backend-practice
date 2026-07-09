import jwt from 'jsonwebtoken';
import env from '../config/env.js'

export const generateAccessToken = (userId) => {
    return jwt.sign({ id: userId }, env.JWT_ACCESSTOKEN, { expiresIn: "1h" })
};
export const generateRefreshToken = (userId) => {
    return jwt.sign({ id: userId }, env.JWT_REFRESHTOKEN, { expiresIn: "1d" })
};

export const verifyRefreshToken = (token) => {
    return jwt.verify(token, env.JWT_REFRESHTOKEN)
}
