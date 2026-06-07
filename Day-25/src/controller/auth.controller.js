const userModel = require("../model/user.model");
const { registerServices, loginServices, forgetpasswordServices, resetPasswordServices } = require("../services/auth.services");
const asyncHandler = require("../utils/asyncHandler");
const errorResponse = require("../utils/errorResponse");
const jwt = require('jsonwebtoken')

const registerController = asyncHandler(async (req, res) => {

    const newUser = await registerServices(req.body);

    return res.status(201).json({
        message: "user create successfull",
        user: newUser,
    })
});

const loginController = asyncHandler(async (req, res) => {

    const isExist = await loginServices(req.body)

    return res.status(200).json({
        message: "user login",
        isExist
    })
});

const forgetpasswordController = asyncHandler(async (req, res) => {


    const email = await forgetpasswordServices(req.body);

    return res.status(200).json({

        message: "link send"
    })


})

const resetPasswordController = asyncHandler(async (req, res) => {

    let token = req.params.token


    const { user } = await resetPasswordServices(token);


    res.render("update.ejs", { userId: user._id });


})

const updatepasswordController = asyncHandler(async (req, res) => {

    const password = req.body.password;
    const userId = req.params.userId;



    if (!password) throw new errorResponse(404, "invalid password");

    const user = await userModel.findById(userId);

    const comparepass = user.comparepassword(password);

    const updateuser = await userModel.findByIdAndUpdate(
        userId,
        {
            comparepass

        },
        {
            returnDocument: "after"
        }
    );

    return res.status(200).json({
        message: "password update",
        User: updateuser
    })


})


module.exports = {
    registerController, loginController, forgetpasswordController, resetPasswordController, updatepasswordController
}