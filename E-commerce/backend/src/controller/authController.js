import userModel from "../model/user.model.js";
import ApiError from "../utils/apiresponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { generateAccessToken, generateRefreshToken } from "../utils/generateToken.js";
import { userRegisterServices } from '../services/auth.services.js'

export const registerUserController = asyncHandler(async (req, res) => {

    const { accesstoken, refreshtoken, newUser
    } = await userRegisterServices(req.body)

    res.cookie("accesstoken", accesstoken, {
        httpOnly: true,
        maxAge: 15 * 60 * 1000
    });
    res.cookie("refreshtoken", refreshtoken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 60 * 1000
    })


    return res.status(201).json({
        message: "user craete succesefull",
        data: newUser
    })



})