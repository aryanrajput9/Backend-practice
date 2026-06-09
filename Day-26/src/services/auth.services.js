const userModel = require("../model/user.model");
const errorresponse = require("../utils/apiresponse");
const jwt = require('jsonwebtoken');
const emailTemp = require("../utils/emailTemp");
const sendEmail = require("../config/mailtransporter");

const registerServices = async (data) => {
    const { name, email, password } = data;

    if (!email || !password) throw new errorresponse(409, "all field are required");

    const isExist = await userModel.findOne({ email });

    if (isExist) throw new errorresponse(200, "User Already Register");


    const newUser = await userModel.create({
        name,
        email,
        password
    });

    const token = jwt.sign({ id: newUser._id },
        process.env.JWT_TOKEN,
        { expiresIn: "15min" });

    res.cookie("token", token, { expiresIn: "15min" })

    return newUser

};

const loginServices = async (data) => {
    const { email, password } = data;

    if (!email || !password) throw new errorresponse(409, "Fill all field");

    const isExist = await userModel.findOne({ email });

    if (!isExist) throw new errorresponse(404, "Email not found");

    const comparepass = isExist.comparepassword(password);

    if (!comparepass) throw new errorresponse(404, "unauthoraised person");


    return isExist
};

const forgetpasswordServices = async ({ email }) => {


    if (!email) throw new errorresponse(409, "enter email");

    const isExist = await userModel.findOne({ email });

    if (!isExist) throw new errorresponse(404, "email not found");

    const token = jwt.sign({ id: isExist._id },
        process.env.JWT_TOKEN,
        { expiresIn: "15min" });



    const restlink = `http://localhost:3000/auth/reset-password/${token}`;

    const mailsyn = emailTemp(isExist._id, restlink);

    await sendEmail(isExist.email, "Reset password kr lo", mailsyn);

    return isExist

}





module.exports = {
    registerServices, loginServices, forgetpasswordServices
}