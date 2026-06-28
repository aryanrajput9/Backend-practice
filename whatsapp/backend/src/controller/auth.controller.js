
import jwt from "jsonwebtoken";
import { createSession, deleteSessionById, getSessionById, updateSessionById } from "../dao/session.dao.js";
import { createUser, getUserByEmailOrUsername } from "../dao/user.dao.js";
import { generateAccessToken, generateRefreshToken } from "../utils/auth.utils.js";
import env from '../config/env.js'

export const registerUserController = async (req, res) => {

    const { username, email, password } = req.body;

    const isUserExists = await getUserByEmailOrUsername({ email, username });

    if (isUserExists) {
        return res.status(400).json({
            message: "User already exists"
        })
    };

    const user = await createUser({ username, email, password });

    const accessToken = await generateAccessToken(user._id);
    const refreshToken = await generateRefreshToken(user._id);

    await createSession({ userId: user._id, refreshToken });

    const session = getSessionById(user._id);


    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 1 * 24 * 60 * 60 * 1000
    });

    return res.status(201).json({
        message: "user create successfull",
        data: {
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            },
            accessToken: accessToken
        }
    })

}

export const loginUserController = async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(409).json({
            message: "All field are required"
        })
    };

    const isUserExists = await getUserByEmailOrUsername({ email });

    if (!isUserExists) {
        return res.status(404).json({
            message: "email not found"
        })
    };

    const comparepass = isUserExists.comparepassword(password);

    if (!comparepass) {
        return res.status(401).json({
            message: "incorrect password"
        })
    }

    let accessToken = await generateAccessToken(isUserExists._id);
    let refreshToken = await generateRefreshToken(isUserExists._id);
    console.log(isUserExists._id)

    await updateSessionById({ userId: isUserExists._id, refreshToken });

    return res.status(200).json({
        message: "login successfull",
        accessToken
    })

}

export const logoutUserCOntroller = async (req, res) => {


    const refreshToken = req.cookies.refreshToken;

    const decode = jwt.verify(refreshToken, env.JWT_REFRESHTOKEN);

    if (!decode) {
        return res.status("404").json({
            message: "Refresh token not found"
        })
    };

    await deleteSessionById(decode.id)

    res.clearCookie("refreshToken").status(200).json({
        message: "user logout successfull"
    })


}