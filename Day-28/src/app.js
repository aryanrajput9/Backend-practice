import express from 'express';
import env from './config/env.js';
import morgon from 'morgan';
import securityMiddleware from './middleware/seccurity.middleware.js';
import authRouter from './module/auth/auth.route.js'
import googleOathMiddleware from './middleware/googleOath.js';
import ErrorHandler from './middleware/errorHandler.js';
import NotFound from './middleware/notFound.middleware.js';

function createApp() {
    const app = express();

    if (env.NODE_ENV === "development") {
        app.use(morgon("dev"))
    };
    securityMiddleware(app)
    googleOathMiddleware(app)

    app.use("/auth/api", authRouter);

    app.use(NotFound)
    app.use(ErrorHandler)

    return app
};

export default createApp