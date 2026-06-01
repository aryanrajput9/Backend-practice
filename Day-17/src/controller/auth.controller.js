const { registerservices, loginservices, refreshTokenservices } = require("../services/auth.services");
const apiresponse = require("../utils/apiresponse");
const asyncHandle = require("../utils/asynHandle");


const registerController = asyncHandle(async (req, res) => {

    let { accesstokon, refreshtoken, newUser } = await registerservices(req.body)

    res.cookie("accesstokon", accesstokon, {
        httpOnly: true,
        maxAge: 15 * 60 * 1000
    });

    res.cookie("refreshtoken", refreshtoken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
    });

    return res.status(201).json(new apiresponse("user create successfully", newUser));

});

const loginController = asyncHandle(async (req, res) => {

    let { accesstokon, refreshtoken, isExiste } = await loginservices(req.body)

    res.cookie("accesstokon", accesstokon, {
        httpOnly: true,
        maxAge: 15 * 60 * 1000
    });

    res.cookie("refreshtoken", refreshtoken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
    });


    return res.status(200).json(new apiresponse("user login successfully", isExiste))


});

const regenrateaccesstoken = asyncHandle(async (req, res) => {

    let refreshToken = req.cookies.refreshtoken
    const { accesstokon } = await refreshTokenservices(refreshToken)


    res.cookie("accesstokon", accesstokon, {
        httpOnly: true,
        maxAge: 15 * 60 * 1000
    });

    return res.status(200).json(new apiresponse("accesstoken generated successfully", accesstokon))


})

module.exports = {
    registerController, loginController, regenrateaccesstoken
}