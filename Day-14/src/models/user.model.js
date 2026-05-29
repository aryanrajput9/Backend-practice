const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String,
        required: [true, "email is required"],

    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
    refreshtoken: {
        type: String
    }

}, {
    timestamps: true
});

userSchema.pre("save", function () {
    this.password = bcrypt.hashSync(this.password, 10)

});

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compare(password, this.password)
};


const userModel = mongoose.model("alluser", userSchema);
module.exports = userModel