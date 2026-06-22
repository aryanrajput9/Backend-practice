import dotenv from 'dotenv';
dotenv.config()
import { z } from 'zod'
import appConstant from '../constant/app.constant.js';
import logger from './logger.js';


const envSchema = z.object({
    PORT: z.coerce.number().default(appConstant.PORT),
    MONGODB_URL: z.string().default(appConstant.MONGODB_URL),
    LOGGER_LEVEL: z.string().default(appConstant.LOGGER_LEVEL),
    NODE_ENV: z.string().default(appConstant.NODE_ENV),
    CORSE_ORIGINE: z.string(),
    RATE_LIMIT: z.coerce.number().default(appConstant.RATE_LIMIT),
    WINDOW_LIMIT: z.coerce.number().default(appConstant.WINDOW_LIMIT),
    CLIENT_ID: z.string(),
    CLIENT_SECRET: z.string(),
    GOOGLE_CALLBACK_URL: z.string(),
    JWT_ACCESSESTOKEN: z.string(),
    JWT_REFRESHTOKEN: z.string(),
    REDIRECT_URL: z.string()

});

const env = envSchema.safeParse(process.env);

if (!env.success) {
    logger.info("please check your env")
}

export default env.data

