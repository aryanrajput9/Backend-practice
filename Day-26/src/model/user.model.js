const mongoose = require('mongoose');
const bcrypt = require('bcrypt')


const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: [true, "email is required"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "password is required"],
        trim: true,
        unique: true
    }
}, {
    timestamps: true
});

userSchema.pre('save', function () {
    this.password = bcrypt.hashSync(this.password, 10);
});

userSchema.methods.comparepassword = function (password) {
    return bcrypt.compareSync(password, this.password)
};

const userModel = mongoose.model("user", userSchema);


module.exports = userModel

