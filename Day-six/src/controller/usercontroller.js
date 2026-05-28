const express = require('express');
const userModle = require("../models/user.model")

const route = express.Router()

route.post("/create-user", async (req, res) => {
    try {
        const { name, num } = req.body

        const newUser = await userModle.create({
            userName: name,
            userNum: num
        })
        return res.status(201).json({
            message: "user created",
            newUser
        })
    } catch (error) {
        console.log("error in post api", error);
        res.status(404).json({
            message: "internal server error"
        })
    }
})

module.exports = route