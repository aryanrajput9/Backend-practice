const mongoose = require("mongoose");


const connectDb = async () => {
    try {

        await mongoose.connect("mongodb://0.0.0.0/Day3")
        console.log("nodemon running")

    } catch (error) {
        console.log("error in mongose", error)
    }
}

module.exports = connectDb