const mongoose = require('mongoose');


const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGOOSE_URL);
        console.log("mongoose connect")
    } catch (error) {
        console.log("error in mongooses")
    }
}

module.exports = connectdb