const mongoose = require('mongoose');

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGOOSE_URL)
        console.log("connect in mongoose")
    } catch (error) {
        console.log("error in mongoose", error)
    }
};

module.exports = connectdb