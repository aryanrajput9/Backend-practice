import express from 'express';
import morgan from 'morgan';
import indexRoute from './routes/index.route.js';
import cookieparser from 'cookie-parser'


function createApp() {
    const app = express();


    app.use(express.json({
        limit: "100kb"
    }));
    app.use(morgan("dev"));
    app.use(cookieparser())

    app.use("/api", indexRoute)
    return app
};

export default createApp