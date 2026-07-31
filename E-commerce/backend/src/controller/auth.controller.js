
import { userLoginServices, userRegisterServices } from "../services/auth.services.js";
import ApiError from "../utils/apiresponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { generateAccessToken, verifyRefreshToken } from "../utils/generateToken.js";

export const registerUserController = asyncHandler(async (req, res) => {


    const { username, email, phone, password } = req.body;


    if (!username || !email || !phone || !password) throw new ApiError(204, "Enter Required Field");

    const { accesstoken, refreshtoken, newUser
    } = await userRegisterServices(username, email, phone, password)

    res.cookie("refreshtoken", refreshtoken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 60 * 1000
    })


    return res.status(201).json({
        message: "user craete succesefull",
        data: newUser,
        token: accesstoken
    })



});

export const loginUserController = asyncHandler(async (req, res) => {

    const { accesstoken, refreshtoken, isExist } = await userLoginServices(req.body)

    res.cookie("refreshtoken", refreshtoken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 60 * 1000
    });

    return res.status(200).json({
        message: "user login",
        data: isExist,
        token: accesstoken
    })

});


export const getCurrentUser = asyncHandler(async (req, res) => {


    const { username, email, phone, _id } = req.user

    return res.status(200).json({
        message: "data fetch",
        data: {
            username, email, phone, userId: _id
        }
    })

});

export const getRefreshToken = asyncHandler(async (req, res) => {
    const refreshtoken = req.cookies.refreshtoken;

    if (!refreshtoken) throw new ApiError(404, "unothorised person");

    const decoded = verifyRefreshToken(refreshtoken);


    if (!decoded) throw new ApiError(404, "unothorised person");

    const newAccessToken = generateAccessToken(decoded.id);

    return res.status(201).json({
        message: "access token genrate",
        token: newAccessToken
    })


})