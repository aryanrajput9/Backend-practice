const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: [true, "name is required"]
    },
    email: {
        type: String,
        trim: true,
        required: [true, "email is required"]
    },
    password: {
        type: String,
        trim: true,
        required: [true, "password is required"]
    },
    refreshtoken: {
        type: String
    }
}, {
    timestamps: true
});

userSchema.pre("save", function () {
    if (!this.isModified("password")) return;

    this.password = bcrypt.hashSync(this.password, 10);


});

userSchema.methods.comparepassword = function (password) {
    return bcrypt.compareSync(password, this.password)
}


const userModel = mongoose.model("user-data", userSchema);

module.exports = userModel