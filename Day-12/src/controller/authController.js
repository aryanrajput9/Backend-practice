
const userModele = require('../model/user.model')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')


const registerUser = async (req, res) => {

    try {
        let { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(409).json({
                message: "all field required"
            })
        };


        const existe = await userModele.findOne({
            email
        });

        if (existe) {
            return res.status(200).json({
                message: "user already register"
            })
        };

        const hashPassword = await bcrypt.hash(password, 10)

        const newUser = await userModele.create({
            username: name,
            email,
            password: hashPassword
        });

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_TOKEN, { expiresIn: "15m" });

        res.cookie("user_identity", token);

        return res.status(201).json({
            message: "user created",
            users: newUser
        })

    } catch (error) {
        console.log("error in register api", error)
    }

}

const loginUser = async (req, res) => {

    try {
        let { email, password } = req.body;

        let existe = await userModele.findOne({
            email
        })

        if (!existe) {
            return res.status(404).json({
                message: "email is invalid "
            })
        };

        const hashPassword = await bcrypt.compare(password, existe.password);

        if (!hashPassword) {
            return res.status(400).json({
                message: "invalid password"
            })
        }

        const tooken = jwt.sign({ id: existe._id }, process.env.JWT_TOKEN, { expiresIn: "15min" });


        res.cookie("token", tooken)


        return res.status(200).json({
            message: "user login"
        })


    } catch (error) {
        console.log("error in login api", error)
    }

}

module.exports = {
    registerUser, loginUser
}