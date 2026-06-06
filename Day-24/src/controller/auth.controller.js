const { registerServices, loginServices, foregetpasswordservices } = require("../../services/auth.services");
const asyncHandler = require("../utils/asyncHandler");
const errorHandler = require("../utils/globelerrorhandler");
const userModel = require("../model/user.model");
const jwt = require("jsonwebtoken")

const registerController = asyncHandler(async (req, res) => {
    console.log(req.body)
    const { newUser } = await registerServices(req.body)

    return res.status(201).json({
        message: "user create successfull",
        user: newUser
    })


});

const loginController = asyncHandler(async (req, res) => {

    const { isExiste } = loginServices(req.body)

    return res.status(200).json({
        message: "user login",
        user: isExiste
    })

});

const forgetPassword = asyncHandler(async (req, res) => {
    console.log(req.body)

    const result = await foregetpasswordservices(req.body)

    return res.status(200).json({
        message: "link send"
    })

});

const resetpasswordcontroller = asyncHandler(async (req, res) => {

    let token = req.params.token;

    if (!token) throw new errorHandler(404, "token not found");

    let decode = jwt.verify(token, process.env.JWT_ROWTOKEN);

    if (!decode) throw new errorHandler(404, "user not exist");

    const user = await userModel.findById(decode.id);

    if (!user) throw new errorHandler(404, "user not found");

    res.render("update.ejs", { userId: user._id });

});

const updatepasswordcontroller = asyncHandler(async (req, res) => {

    let password = req.body.password;
    let userId = req.params.userId;

    if (!password) throw new errorHandler(404, "password not found");

    let user = await userModel.findById(userId);

    const comparepass = user.comparepassword(password);

    let updateUser = await userModel.findByIdAndUpdate(
        userId, {
        comparepass
    },
        {
            returnDocument: "after"
        }
    );

    return res.status(200).json({
        message: "password update",
        User: updateUser
    })

})



module.exports = {
    registerController, loginController, resetpasswordcontroller, forgetPassword, updatepasswordcontroller
}