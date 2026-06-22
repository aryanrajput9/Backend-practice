import jwt from 'jsonwebtoken';
import env from '../config/env.js'


const generateToken = (userId) => {
    return jwt.sign({ id: userId }, env.JWT_TOKEN, { expiresIn: "1H" })
};

export default generateToken