const mongoose = require('mongoose');
const bcrypt = require('bcrypt')


const userSchema = new mongoose.Schema({

    username: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        required: [true, "email required"],

    },
    password: {
        type: String,
        trim: true,
        required: [true, "password required"],

    },
    refreshtoken: {
        type: String
    }
}, {
    timestamps: true
});

userSchema.pre("save", async function () {

    if (!this.isModified("password")) {
        return;
    }

    this.password = await bcrypt.hash(
        this.password,
        10
    );
});

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

const userModel = mongoose.model("usersData", userSchema);

module.exports = userModel