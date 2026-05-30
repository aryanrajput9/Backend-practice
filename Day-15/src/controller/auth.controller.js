const userModel = require("../model/user.model");
const { generateAccesstooken, generateRefreshtooken } = require("../utils/tooke");
const bycrpt = require('bcrypt');
const jwt = require('jsonwebtoken')

const registercontroller = async (req, res) => {

    try {
        const { name, email, password } = req.body;

        if (!email || !password) return res.status(409).json({ message: "all field required" });

        const isExist = await userModel.findOne({ email });

        if (isExist) return res.status(200).json({ message: "user already exist" });

        const newUser = await userModel.create({
            username: name,
            email,
            password
        });


        const accesstoken = generateAccesstooken(newUser._id);
        const refreshtoken = generateRefreshtooken(newUser._id);


        newUser.refreshtoken = refreshtoken,
            await newUser.save()

        res.cookie("accesstoken", accesstoken, {
            httpOnly: true,
            maxAge: 15 * 60 * 1000
        });
        res.cookie("refreshtoken", refreshtoken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        })

        return res.status(201).json({
            message: "user created successfully",
            user: newUser
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "internal server error"
        })
    }
}

const logicontroller = async (req, res) => {

    try {
        const { email, password } = req.body;

        if (!email || !password) return res.status(409).json({
            message: "all field are required"
        });

        const isExist = await userModel.findOne({ email });

        if (!isExist) return res.status(404).json({ message: "invalid email" });


        const comparePass = isExist.comparePassword(password)

        console.log(comparePass)

        if (!comparePass) return res.status(404).json({ message: "incorrect password" });

        const accesstoken = generateAccesstooken(isExist._id);
        const refreshtoken = generateRefreshtooken(isExist._id);

        isExist.refreshtoken = refreshtoken;
        await isExist.save()

        res.cookie("accesstoken", accesstoken, {
            httpOnly: true,
            maxAge: 15 * 60 * 1000,
        });
        res.cookie("refreshtoken", refreshtoken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });

        return res.status(200).json({ message: "login successfully", user: isExist });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "internal server error" })
    }
}

const regenrateaccesstoken = async (req, res) => {

    try {
        const refreshtoken = req.cookies.refreshtoken;

        if (!refreshtoken) return res.status(404).json({ message: "token not found" })

        const decode = jwt.verify(refreshtoken, process.env.JWT_REFRESHTOOKEN);

        const user = await userModel.findById(decode.userId);

        if (!user) return res.status(404).json({ message: "user not found" });

        if (refreshtoken !== user.refreshtoken) return res.status(409).json({ message: "unauthorised person" });

        let accesstoken = generateAccesstooken(user._id);

        res.cookie("accesstoken", accesstoken, {
            httpOnly: true,
            maxAge: 15 * 60 * 1000
        })

        return res.status(200).json({
            message: "access token generated"
        })

    } catch (error) {
        return res.status(500).json({
            message: "internal server error"
        })
    }

}




module.exports = {
    registercontroller, logicontroller, regenrateaccesstoken
}