const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


const userShema = new mongoose.Schema({
    name: {
        type: String,

    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    }
}, {
    timestamps: true
});

userShema.pre("save", function () {
    this.password = bcrypt.hashSync(this.password, 10);
});
userShema.methods.comparepassword = function (password) {
    return bcrypt.compareSync(password, this.password)
}

const userModel = mongoose.model("users", userShema);

module.exports = userModel