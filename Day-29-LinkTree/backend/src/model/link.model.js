import mongoose, { Schema, model } from 'mongoose';



const linkSchema = new Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "users",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    clicks: {
        type: Number,
        default: 0,
    }
}, {
    timestamps: true
});

const linkModel = model("links", linkSchema);

export default linkModel