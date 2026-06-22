import { Schema, model } from 'mongoose';
import { email, trim } from 'zod';
import { Role } from '../constant/model.constant.js';



const userSchema = new Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    password: { type: String },
    role: { type: String, enum: Object.values(Role), default: Role.SCORER },
    isDeleted: { type: Boolean, default: false },
    picture: {
        type: String,
        default: "https://px/pixxo.io/test/user.png"
    }
}, {
    timestamps: true
});


const userModel = model("user", userSchema);

export default userModel