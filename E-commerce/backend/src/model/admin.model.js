import mongoose from 'mongoose';
import bcrypt from 'bcrypt'


const adminSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    refreshToken: {
        type: String,
        default: "",
    },
}, {
    timestamps: true
});

adminSchema.pre("save", async function () {

    if (!this.isModified("password")) {
        return
    };
    this.password = await bcrypt.hash(this.password, 10)
});

adminSchema.methods.compareadminpassowrd = async function (password) {
    return await bcrypt.compare(password, this.password)
};


const adminModel = mongoose.model("admin", adminSchema);

export default adminModel
