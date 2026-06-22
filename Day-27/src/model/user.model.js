import mongoose, { mongo } from 'mongoose';

const userShema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
}, {
    timestamps: true
});

const userModel = mongoose.model("user", userShema);

export default userModel 