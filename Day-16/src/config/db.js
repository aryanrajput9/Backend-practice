const mongoose = require('mongoose');

const connectdb = async () => {

    try {
        await mongoose.connect(process.env.MONGOOSE_URL);
        console.log("mongoose conneected")
    } catch (error) {
        console.log("error in mongoose")
    }
};

module.exports = connectdb