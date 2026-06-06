const mongoose = require("mongoose");
const bcrypt = require('bcrypt')


const userShema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
}, {
    timestamps: true
});

userShema.pre("save", function () {
    this.password = bcrypt.hashSync(this.password, 10)
});

userShema.methods.comparepassword = function (password) {
    return bcrypt.compareSync(password, this.password)
}

const userModel = mongoose.model("users-ll", userShema)
module.exports = userModel