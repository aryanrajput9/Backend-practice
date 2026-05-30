const userModel = require("../model/user.model");
const jwt = require('jsonwebtoken')

const authmiddleware = async (req, res, next) => {

    try {
        const token = req.cookies.accesstoken;

        if (!token) return res.status(404).json({ message: "unathorised person" });

        const decode = jwt.verify(token, process.env.JWT_ACCESSTOOKEN);

        if (!decode) return res.status(404).json({ message: "unathorised person" });

        const user = await userModel.findById(decode.userId);

        if (!user) return res.status(404).json({ message: "unathorised person" });

        req.user = user;

        console.log(user)
        next()

    } catch (error) {
        return res.status(500).json({ message: "internal server error" })
    }
}

module.exports = authmiddleware