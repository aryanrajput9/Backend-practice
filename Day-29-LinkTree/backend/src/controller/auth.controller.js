import userModel from "../model/user.model.js";
import generateToken from "../utils/generateToken.js";

export const registerController = async (req, res) => {

    const { name, email, password } = req.body;

    if (!name || !email || !password) return res.status(404).json("all field requid");

    const userPresent = await userModel.findOne({ email });

    if (userPresent) return res.status(200).json({
        message: "email already exist"
    });

    const newUser = await userModel.create({
        name,
        email,
        password
    })

    const token = generateToken(newUser._id);

    res.cookie("token", token, {
        httpOnly: true,
        maxAge: 60 * 60 * 1000
    });

    return res.status(201).json({
        message: "user create successfull",
        data: newUser
    })



};

export const loginController = async (req, res) => {


    const { identifier, password } = req.body;

    if (!identifier || !password) return res.status(409).json({
        message: "all field required"
    });

    let userPresent = await userModel.findOne({ email: identifier });

    if (!userPresent) return res.status(404).json({
        message: "please register first"
    });

    let comparepass = await userPresent.comparepassword(password);

    if (!comparepass) return res.status(401).json({
        message: "incorrect password"
    });

    let token = generateToken(userPresent._id);

    res.cookie("token", token, {
        httpOnly: true,
        maxAge: 60 * 60 * 1000
    });

    return res.status(200).json({
        message: "user login",
        data: userPresent
    })
}