const userModel = require("../models/user.model");
const { generateAccesstoken, generateRefreshtoken } = require("../utils/tooken");
const jwt = require('jsonwebtoken')


const registerAuthcontroller = async (req, res) => {
    try {
        let { name, email, password } = req.body;

        if (!email || !password) return res.status(409).json({ message: "all field required" });

        const isExist = await userModel.findOne({ email });

        if (isExist) return res.status(200).json({ message: "user already register" });

        const newUser = await userModel.create({
            username: name,
            email,
            password
        });

        const accessestoken = generateAccesstoken(newUser._id);
        const refreshtoken = generateRefreshtoken(newUser._id)

        newUser.refreshtoken = refreshtoken;
        await newUser.save();

        res.cookie("accesstoken", accessestoken, {
            httpOnly: true,
            maxAge: 15 * 60 * 1000
        });

        res.cookie("refreshtoken", refreshtoken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
        })

        return res.status(201).json({
            message: "user created",
            user: newUser
        })

    } catch (error) {
        return res.status(500).json({
            message: "internal server error", error
        })
    }
}

const loginAuthcontroller = async (req, res) => {

    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(409).json({
                message: "all field are required"
            })
        };

        let isExist = await userModel.findOne({ email });

        if (!isExist) {
            return res.status(404).json({
                message: "email not found"
            })
        };


        const comparePass = isExist.comparePassword(password);



        if (!comparePass) {
            return res.status(401).json({
                message: "password not matchh"
            })
        }

        const accessestoken = generateAccesstoken(isExist._id);
        const refreshtoken = generateRefreshtoken(isExist._id);

        isExist.refreshtoken = refreshtoken;
        await isExist.save();


        res.cookie("accesstoken", accessestoken, {
            httpOnly: true,
            maxAge: 15 * 60 * 1000
        });
        res.cookie("refreshtoken", refreshtoken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        })

        return res.status(200).json({
            message: "user login",
            user: isExist


        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "internal server error",
        })
    }


}

const createRefreshTooken = async (req, res) => {

    try {
        let refreshtoken = req.cookies.refreshtoken;

        if (!refreshtoken) {
            return res.status(401).json({
                message: "user are not valid"
            })
        };

        const decode = jwt.verify(refreshtoken, process.env.JWT_SECRATEKEY_REFRESH)

        const user = await userModel.findById(decode.userId);

        if (!user) {
            return res.status(401).json({
                message: "user are not valid"
            })
        };

        if (refreshtoken !== user.refreshtoken) {
            return res.status(401).json({
                message: "user are not valid"
            })
        }

        let accesstoken = generateAccesstoken(user._id);

        res.cookie("accesstoken", accesstoken, {
            httpOnly: true,
            maxAge: 15 * 60 * 1000
        })

        return res.status(200).json({
            message: "new access token generated"
        })

    } catch (error) {
        console.log("error in genraterefrshtoken", error)
    }
}



module.exports = {
    registerAuthcontroller, loginAuthcontroller, createRefreshTooken
}