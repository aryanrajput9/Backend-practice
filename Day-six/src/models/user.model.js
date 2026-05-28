const mongoose = require('mongoose');

const user = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    userNum: {
        type: Number,
        required: true
    }
})

const userModel = mongoose.model("users", user)

module.exports = userModel