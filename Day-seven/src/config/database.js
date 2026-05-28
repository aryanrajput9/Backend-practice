const mongoose = require("mongoose");

const connectdb = async () => {
    try {
        await mongoose.connect('mongodb://0.0.0.0');
        console.log("mongoose is connected")

    } catch (error) {
        console.log("error in mongoose", error)
    }
}

module.exports = connectdb