
import { createSession, getSessionById } from "../dao/session.dao.js";
import { createUser, getUserByEmailOrUsername } from "../dao/user.dao.js";
import { generateAccessToken, generateRefreshToken } from "../utils/auth.utils.js";

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

    if (session) {
        return res.status(400).json({
            message: "session already exist"
        })
    }

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