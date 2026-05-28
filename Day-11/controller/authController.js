const userModel = require("../src/model/user.model");
const jwt = require('jsonwebtoken');
const bycript = require('bcryptjs')

const registerController = async (req, res) => {
    try {

        let { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const isExist = await userModel.findOne({ email });

        if (isExist) {
            return res.status(409).json({
                message: "User already exists"
            });
        }
        const hashPass = await bycript.hash(password, 10)
        const newUser = await userModel.create({
            user: name,
            email,
            password: hashPass
        });

        const token = jwt.sign(
            { id: newUser._id },
            process.env.JWT_TOOKEN,
            {
                expiresIn: "15m"
            }
        );

        res.cookie("userId", token)

        return res.status(201).json({
            message: "User created successfully",
            user: newUser
        });

    } catch (error) {
        console.log("Error in register api", error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

module.exports = registerController;