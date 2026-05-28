const { ObjectId } = require("mongodb")
const mongoose = require("mongoose")
const express = require("express");
const UserModel = require('../model/user.Model')


const app = express();
app.use(express.json());
let user = []

app.post("/createUser", async (req, res) => {



    try {


        let { name, mobile, password, email } = req.body

        let newUser = await UserModel.create({
            name,
            mobile,
            password,
            email
        })

        return res.status(201).json({
            message: "create ho gy7a",
            users: newUser
        })

    } catch (error) {
        console.log("error in creating usre", error)
    }
})
app.get("/getUserh", async (req, res) => {

    try {
        let db = mongoose.connection.db;
        let user = await db.collection("users").find().toArray()

        return res.send(user)

    } catch (error) {
        console.log("usre not find", error)
    }
})

app.delete("/delUsers/:id", (req, res) => {
    try {
        const { id } = req.params;

        const db = mongoose.connection.db;
        const result = db.collection("users").deleteOne({
            _id: new ObjectId(id)
        })

        return res.send(result)
    } catch (error) {
        console.log("delete nhi hu", error)
    }

})



module.exports = app