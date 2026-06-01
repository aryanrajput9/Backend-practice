const userModel = require("../model/user.model");
const apierror = require("../utils/apierror");
const asyncHandle = require("../utils/asynHandle");
const jwt = require("jsonwebtoken")

const authmiddleware = asyncHandle(async (req, res, next) => {

    const token = req.cookies.accesstokon;

    if (!token) throw new apierror(404, "unaothorised person");

    const decode = jwt.verify(token, process.env.JWT_TOOKEN);

    if (!decode) throw new apierror(404, "unaothorised person");

    const user = await userModel.findById(decode.userId);

    if (!user) throw new apierror(404, "unaothorised person");

    req.user = user;

    next()

});

module.exports = authmiddleware