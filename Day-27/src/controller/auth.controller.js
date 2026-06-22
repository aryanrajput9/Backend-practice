import userModel from "../model/user.model.js";
import jwt from 'jsonwebtoken'

const registerController = async (req, res) => {
    console.log(req.body)
    try {

        const { name, email, password } = req.body;

        if (!name || !email || !password) return res.status(409).json({
            message: "all field are required"
        });

        let isExist = await userModel.findOne({ email });

        if (isExist) return res.status(200).json({ message: "email already register" });

        const emailRegix = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegix.test(email)) {
            return res.status(400).json({
                message: "wrong email formate"
            })
        }

        const newUser = await userModel.create({
            name,
            email,
            password
        });

        let token = jwt.sign({ id: newUser._id, email: newUser.email }, process.env.JWT_SECRET);

        res.cookie("token", token)

        return res.status(201).json({
            message: "user create successfull",
            data: newUser
        })
    } catch (error) {
        console.log("api error", error)
    }
};

const loginController = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).json({
        message: "all field required"
    });

    let isExist = await userModel.findOne({ email });

    if (!isExist) res.status(404).json({
        message: "email not found"
    });

    if (!(isExist.matchPassword(password))) {
        return res.status(401).json({
            message: "password is inccorect"
        })
    };

    let token = jwt.sign({ id: isExist._id, email: isExist.email },
        process.env.JWT_SECRET
    );

    res.cookie("token", token);

    return res.status(200).json({
        message: "user login",
        data: isExist
    })



};

export {
    registerController, loginController
}