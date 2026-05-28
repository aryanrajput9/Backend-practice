const mongoose = require('mongoose');

const userShecma = mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const userModel = mongoose.model("users", userShecma);


module.exports = userModel