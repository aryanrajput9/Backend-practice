const mongoose = require('mongoose');


const connectdb = async () => {

    try {
        await mongoose.connect(process.env.MONGOOSE_URL)
        console.log("mongosse connect")
    } catch (error) {
        console.log("error in mongose", error)
    }
}

module.exports = connectdb