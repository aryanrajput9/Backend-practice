import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt'



const userSchema = new Schema({

    username: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },

    password: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    }
}, {
    timestamps: true
});

userSchema.pre("save", function () {

    if (this.isModified("password")) {
        this.password = bcrypt.hashSync(this.password, 10)
    }

});

userSchema.methods.comparepassword = async function (password) {
    return await bcrypt.compare(password, this.password)
};

const userModel = model("users", userSchema);

export default userModel

