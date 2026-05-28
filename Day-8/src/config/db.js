const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGOOSE_URL);
        console.log('mongoose connected')
    } catch (error) {
        console.log('error in mongose', error)
    }
}

module.exports = connectDb