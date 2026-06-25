import userModel from "../model/user.model.js";
import ApiError from "../utils/apiresponse.js";
import { generateAccessToken, generateRefreshToken } from "../utils/generateToken.js";

export const userRegisterServices = async (data) => {
    const { username, email, phone, password } = data;
    console.log(data)

    if (!username || !email || !phone || !password) throw new ApiError(204, "Enter Required Field");

    const isExist = await userModel.findOne({ email });

    if (isExist) throw new ApiError(409, "Email Already Exist");




    let newUser = await userModel.create({
        username,
        email,
        phone,
        password
    });

    const comparepass = newUser.comparepassord(password);


    if (!comparepass) throw new ApiError(400, "incorrect password");

    let accesstoken = generateAccessToken(newUser._id);
    let refreshtoken = generateRefreshToken(newUser._id);

    return {
        accesstoken, refreshtoken,
        newUser
    }
}