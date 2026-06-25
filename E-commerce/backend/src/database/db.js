import mongoose from 'mongoose';
import env from '../config/env.js'


async function craeteDb() {
    try {
        await mongoose.connect(env.MONGOOSE_URL);
        console.log("mongoose connected")
    } catch (error) {
        console.log("error in mongoose", error)
    }
};

export default craeteDb