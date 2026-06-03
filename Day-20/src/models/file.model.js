const mongoose = require('mongoose');


const fileSchema = new mongoose.Schema({

    fileurl: {
        type: String,
        required: [true, "give file url"]
    }
}, {
    timestamps: true
});

const fileModel = mongoose.model("imageUrl", fileSchema);

module.exports = fileModel