
const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    name: String,
    mobile: Number,
    password: String,
    email: String
})

let UserModel = mongoose.model("users", userSchema)
module.exports = UserModel;