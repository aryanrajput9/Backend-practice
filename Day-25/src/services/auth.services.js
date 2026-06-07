const userModel = require("../model/user.model");
const emailTemp = require("../utils/emailTemp");
const errorResponse = require("../utils/errorResponse");
const geneatetoken = require('../utils/tokengenerater');
const sendEmail = require('../config/mailcon');
const jwt = require('jsonwebtoken')

const registerServices = async ({ name, email, password }) => {

    if (!email || !password) throw new errorResponse(409, "All field required");

    const isExist = await userModel.findOne({ email });
    if (isExist) throw new errorResponse(200, "User Already Register");

    const newUser = await userModel.create({
        name,
        email,
        password
    });

    return {
        newUser
    }
};

const loginServices = async ({ email, password }) => {

    const isExist = await userModel.findOne({ email })

    if (!isExist) throw new errorResponse(404, "Unauthorised User");

    const comparepass = isExist.comparepassword(password);
    if (!comparepass) throw new errorResponse(404, "Unauthorised User");

    return { isExist }
}

const forgetpasswordServices = async ({ email }) => {

    if (!email) throw new errorResponse(404, "Please enter your email");

    const isExist = await userModel.findOne({ email });
    if (!isExist) throw new errorResponse(404, "user not valid");

    let rowToken = geneatetoken(isExist._id);

    let restLink = `http://localhost:3000/auth/reset-password/${rowToken}`;

    const mailTemp = emailTemp(isExist.name, restLink);


    await sendEmail(isExist.email, "for rest password", mailTemp);

    return null
}

const resetPasswordServices = async (token) => {

    if (!token) throw new errorResponse(404, "token not found");

    const decode = jwt.verify(token, process.env.JWT_ROWTOKEN);

    const user = await userModel.findById(decode.id);
    console.log(user)

    return {
        user
    }


}


module.exports = {
    registerServices, loginServices, forgetpasswordServices, resetPasswordServices
}