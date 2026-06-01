const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const usreSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "name is required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "name is required"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "name is required"],
        trim: true,
        unique: true
    },
    refreshToken: {
        type: String
    }
}, {
    timestamps: true
});

usreSchema.pre("save", async function () {

    if (!this.isModified("password")) {
        return;
    }

    this.password = await bcrypt.hash(
        this.password,
        10
    );

});

usreSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password)
}

const userModel = mongoose.model("all-users", usreSchema);

module.exports = userModel