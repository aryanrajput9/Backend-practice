const userModel = require("../model/user.model");
const { registerServices, loginServices, forgetpasswordServices } = require("../services/auth.services");
const errorresponse = require("../utils/apiresponse");
const asyncHandler = require("../utils/asynHandler");
const jwt = require('jsonwebtoken');
const emailTemp = require("../utils/emailTemp");
const sendEmail = require("../config/mailtransporter");
const connectRedis = require("../config/cache");



const registerController = asyncHandler(async (req, res) => {

    const newUser = await registerServices(req.body)
    return res.status(201).json({ message: "user register successfully", data: newUser });

});

const loginController = asyncHandler(async (req, res) => {

    const isExist = await loginServices(req.body);


    const token = jwt.sign({ id: isExist._id },
        process.env.JWT_TOKEN,
        { expiresIn: "15min" });

    res.cookie("token", token, { expiresIn: "15min" })

    return res.status(200).json({
        message: "user login successfull",
        data: isExist
    })
});

const forgetpasswordController = asyncHandler(async (req, res) => {

    const isExist = await forgetpasswordServices(req.body)

    return res.status(200).json({
        message: "link send",
        data: isExist
    })


});

const resetpasswordController = asyncHandler(async (req, res) => {

    let token = req.params.token;

    if (!token) throw new errorresponse(404, "token not found");

    const decode = jwt.verify(token, process.env.JWT_TOKEN);


    const user = await userModel.findById(decode.id);

    res.render('update.ejs', { userId: user._id });

})

const updatepasswordController = asyncHandler(async (req, res) => {
    const password = req.body.password;
    const userId = req.params.userId;

    if (!password) throw new errorresponse(404, "user mot found");

    const user = await userModel.findById(userId)

    const hashpassword = user.comparepassword(password)

    const updateuser = await userModel.findByIdAndUpdate(
        userId,
        {
            hashpassword,
        },
        {
            new: true
        },
    );



    return res.send(updateuser)


});

const logout = asyncHandler(async (req, res) => {

    let token = req.cookies.token;

    if (!token) throw new errorresponse(404, "token not found")

    connectRedis(token, "blacklisted")

    res.clearCookie("token");

    return res.status(200).json({
        message: "user logout"
    })


})


module.exports = {
    registerController,
    loginController,
    forgetpasswordController,
    resetpasswordController,
    updatepasswordController, logout
}
