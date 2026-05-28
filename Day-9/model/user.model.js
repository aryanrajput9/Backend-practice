const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    modile: {
        type: Number,
        required: true,
    }
})

const userModle = mongoose.model("users", userSchema);

module.exports = userModle