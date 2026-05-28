const express = require('express');
const userModel = require('./model/user.model');

const app = express();
const jwt = require('jsonwebtoken');
const bycript = require('bcryptjs')
const cookisParse = require('cookie-parser')


app.use(express.json())
app.use(cookisParse())


app.post("/createUSer", async (req, res) => {


    try {

        const { name, email, password } = req.body;

        if (!name || !email || !password) return res.status(404).json({
            message: "fill all field"
        })

        const isexist = await userModel.findOne({
            email
        });

        if (isexist) {
            return res.status(409).json({
                message: "user already existe"
            })
        }

        let hashPass = await bycript.hash(password, 10)

        const newUser = await userModel.create({
            username: name,
            email,
            password: hashPass
        });

        let token = jwt.sign({ id: newUser._id }, process.env.JWT_SECREATE, {
            expiresIn: "1h",
        })


        res.cookie("tooken", token)

        return res.status(201).json({
            message: "user created successfull",
            users: newUser
        })
    } catch (error) {
        console.log("error in post api", error)
    }
})

module.exports = app