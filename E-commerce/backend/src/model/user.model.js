import mongoose from 'mongoose';
import bcrypt from 'bcrypt'


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

userSchema.pre("save", function () {
    if (!this.isModified("password")) {
        return
    };

    this.password = bcrypt.hashSync(this.password, 10);
})

userSchema.methods.comparepassord = function (password) {

    return bcrypt.compareSync(password, this.password)
}

const userModel = mongoose.model("user-data", userSchema);

export default userModel