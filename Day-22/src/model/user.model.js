const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: function () {
            return this.provder !== "google"
        }
    },
    provder: {
        type: String,
        enum: ["google", "facebook"]
    },
    provder_id: {
        type: String
    }
}, {
    timestamps: true
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel