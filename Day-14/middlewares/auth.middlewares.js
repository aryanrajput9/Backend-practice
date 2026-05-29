
const jwt = require('jsonwebtoken');
const userModel = require('../src/models/user.model');
const authmiddlewares = async (req, res, next) => {

    try {
        let tooken = req.cookies.accesstoken;

        if (!tooken) {
            return res.status(401).json({
                message: "user invalid"
            })
        };

        const decode = jwt.verify(tooken, process.env.JWT_SECRATEKEY_ACCESS);
        if (!decode) {
            return res.status(401).json({
                message: "user invalid"
            })
        }
        const user = await userModel.findById(decode.id);

        req.user = user;
        next()
    } catch (error) {
        console.log("error in middleware", error)
    }

}

module.exports = authmiddlewares;