import mongoose from 'mongoose';
import env from '../config/env.js'

const createDb = async () => {
    try {
        await mongoose.connect(env.MONGOOSE_URI);
        console.log("mongoose connected")
    } catch (error) {
        console.log('error in mongoose', error)
    }
};

export default createDb