import mongoose from 'mongoose';
import env from './env.js';
import logger from './logger.js';

const connectdb = async () => {
    console.log(env.MONGODB_URL)
    try {
        await mongoose.connect(env.MONGODB_URL);
        logger.info("mongose connect")
    } catch (error) {
        logger.warn("error in mongose", error)
    }
};

export default connectdb