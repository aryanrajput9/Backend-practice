import { adminFindByemail, createAdmin } from "../dao/admin.dao.js";
import adminModel from "../model/admin.model.js";
import ApiError from "../utils/apiresponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from "../utils/generateToken.js";
import env from '../config/env.js'


export const createAdminController = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    // Validation
    if (!name || !email || !password) {
        throw new ApiError(400, "All fields are required");
    }

    // Check Admin
    const isAdminExist = await adminModel.findOne({ email });

    if (isAdminExist) {
        throw new ApiError(409, "Admin already exists with this email");
    }

    // Create Admin
    const admin = await createAdmin(name, email, password);

    // Generate Refresh Token
    const refreshToken = generateRefreshToken(admin._id);

    admin.refreshToken = refreshToken;

    await admin.save({ validateBeforeSave: false });

    return res.status(201).json({
        success: true,
        message: "Admin account created successfully.",
        admin: admin
    });
});

export const loginAdminController = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new ApiError(400, "All fields are required");
    }

    const admin = await adminModel.findOne({ email });

    if (!admin) {
        throw new ApiError(404, "Admin not found");
    }

    const comparePass = await admin.compareadminpassowrd(password);

    if (!comparePass) {
        throw new ApiError(401, "Invalid email or password");
    }

    const accessToken = generateAccessToken(admin._id);
    const refreshToken = generateRefreshToken(admin._id);

    admin.refreshToken = refreshToken;

    await admin.save({ validateBeforeSave: false });

    res.cookie("adminrefreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
        success: true,
        message: "Admin logged in successfully.",
        accessToken,
        admin
    });
});

export const getCurrentAdmin = asyncHandler(async (req, res) => {

    const { email, name } = req.admin;

    const admin = await adminFindByemail(email);

    if (!admin) throw new ApiError(404, "Amdin Not Found")

    return res.status(200).json({
        message: "admin data fetched",
        admin: {
            name: admin.name,
            email: admin.email
        }
    })



});

export const adminRefreshGeneraterToken = asyncHandler(async (req, res) => {
    let refreshToken = req.cookies.adminrefreshToken;

    if (!refreshToken) throw new ApiError(404, "token not found");

    const decode = verifyRefreshToken(refreshToken, env.JWT_REFRESHTOKEN);

    if (!decode) throw new ApiError(404, "not found");

    const accessToken = generateAccessToken(decode.id);

    return res.status(200).json({
        message: "generated",
        accessToken
    })

})