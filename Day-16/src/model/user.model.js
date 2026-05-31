const mongoose = require('mongoose');


const usreShema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "name is required"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "email is required"],
        trim: true,
    },
    password: {
        type: String,
        required: [true, "password is required"],
        trim: true
    }
}, {
    timestamps: true
});


const usreModel = mongoose.model("allusers", usreShema);
module.exports = usreModel