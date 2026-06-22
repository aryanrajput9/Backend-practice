import jwt from 'jsonwebtoken'
import env from '../config/env.js'


export function generateaccessToken(data) {
    return jwt.sign({ data }, env.JWT_ACCESSESTOKEN, { expiresIn: "1H" })
};

export function generaterefreshToken(data) {
    return jwt.sign({ data }, env.JWT_REFRESHTOKEN, { expiresIn: "1D" })
}