import env from '../config/env.js';


export default {
    LOGGER_LEVEL: "info",
    PORT: 3000,
    MONGODB_URL: "mongodb://localhost:27017/Day28",
    NODE_ENV: "development",
    RATE_LIMIT: 100,
    WINDOW_LIMIT: 15 * 60 * 1000

};

export const app_config = {
    cookie: {
        accessToken: {
            httpOnly: true,
            sameSite: "lax",
            maxAge: 60 * 60 * 1000
        },
        refreshToken: {
            httpOnly: true,
            sameSite: "lax",
            maxAge: 24 * 60 * 60 * 1000
        }
    }

}