
const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGOOSE_URL);
        console.log("mongose chl gya ")
    } catch (error) {
        console.log("error aa gya mongoose me ", error)
    }
}

module.exports = connectDb