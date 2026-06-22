import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'



const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, "password is required"],
        trim: true
    }
}, {
    timestamps: true
});

userSchema.pre("save", async function () {

    if (!this.isModified("password")) {
        return
    };
    this.password = bcrypt.hashSync(this.password, 10)
});

userSchema.methods.comparepassword = function (password) {
    return bcrypt.compareSync(password, this.password)
};


const userModel = mongoose.model("users", userSchema);
export default userModel