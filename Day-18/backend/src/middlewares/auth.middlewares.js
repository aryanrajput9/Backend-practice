const userModel = require('../model/user.model');
const apierror = require('../utils/apierror');
const asyncHandler = require('../utils/asycnhandler');
const jwt = require('jsonwebtoken')
const authmiddlerwares = asyncHandler(async (req, res, next) => {

    let token = req.cookies.accesstoke;
    if (!token) throw new apierror(409, "unauthorised person");

    const decode = jwt.verify(token, process.env.JWT_TOOKEN_ACCESS);

    if (!decode) throw new apierror(409, "unauthorised person");

    const user = await userModel.findById(decode.userId);

    if (!user) throw new apierror(409, "unauthorised person");

    req.user = user
    next()

})

module.exports = authmiddlerwares