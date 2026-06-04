const mongoose = require('mongoose');


const usershema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    provider: {
        type: String,
        enum: ["google", "facebook"]
    },
    provider_id: {
        type: String
    }
}, {
    timestamps: true
});

const userModel = mongoose.model("users", usershema);

module.exports = userModel;