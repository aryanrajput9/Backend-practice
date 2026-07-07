import { userLoginServices, userRegisterServices } from "../services/auth.services.js";
import asyncHandler from "../utils/asyncHandler.js";

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



});

export const loginUserController = asyncHandler(async (req, res) => {

    const { accesstoken, refreshtoken, isExist } = await userLoginServices(req.body)

    res.cookie("accesstoken", accesstoken, {
        httpOnly: true,
        maxAge: 15 * 60 * 1000
    });
    res.cookie("refreshtoken", refreshtoken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 60 * 1000
    });

    return res.status(200).json({
        message: "user login",
        data: isExist
    })

})