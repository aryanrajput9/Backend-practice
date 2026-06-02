const userModel = require('../model/user.model');
const { registerservices, loginservices } = require('../services/auth.services');
const apierror = require('../utils/apierror');
const apiresponse = require('../utils/apiresponse');
const asyncHandler = require('../utils/asycnhandler');
const { geaccesstoken, gerefreshtoken } = require('../utils/tokengerator');

const registercontroller = asyncHandler(async (req, res) => {

    let { accesstoke, refreshtoken, newUser } = await registerservices(req.body)

    res.cookie("accesstoke", accesstoke, {
        httpOnly: true,
        maxAge: 15 * 60 * 1000
    });
    res.cookie("refreshtoken", refreshtoken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
    });

    return res.status(201).json(new apiresponse("user create successfully", newUser))

});

const logincontroller = asyncHandler(async (req, res) => {

    const { accesstoke, refreshtoken, user } = await loginservices(req.body);
    res.cookie("accesstoke", accesstoke, {
        httpOnly: true,
        maxAge: 15 * 60 * 1000
    });
    res.cookie("refreshtoken", refreshtoken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
    });

    return res.status(200).json(new apiresponse("user login successfully", user))

})


module.exports = {
    registercontroller, logincontroller
}