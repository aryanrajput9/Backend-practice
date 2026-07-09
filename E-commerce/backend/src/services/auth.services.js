import userModel from "../model/user.model.js";
import ApiError from "../utils/apiresponse.js";
import { generateAccessToken, generateRefreshToken } from "../utils/generateToken.js";

export const userRegisterServices = async (username, email, phone, password) => {

    const isExist = await userModel.findOne({ email });

    if (isExist) throw new ApiError(409, "Email Already Exist");




    let newUser = await userModel.create({
        username,
        email,
        phone,
        password
    });



    let accesstoken = generateAccessToken(newUser._id);
    let refreshtoken = generateRefreshToken(newUser._id);

    return {
        accesstoken, refreshtoken,
        newUser
    }
}

export const userLoginServices = async (data) => {
    const { email, password } = data

    const isExist = await userModel.findOne({ email });

    if (!isExist) throw new ApiError(401, "Unauthorized user");

    const comparepass = isExist.comparepassord(password);


    if (!comparepass) throw new ApiError(400, "incorrect password");

    let accesstoken = generateAccessToken(isExist._id);
    let refreshtoken = generateRefreshToken(isExist._id);

    return {
        accesstoken, refreshtoken, isExist
    }
}

