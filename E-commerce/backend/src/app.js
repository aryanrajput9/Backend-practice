import express from 'express';
import morgan from 'morgan'
import errorMiddleware from './middleware/errorMIddleware.js';
import indexRoute from './routes/index.route.js';
import cookieparser from 'cookie-parser'


function createApp() {
    const app = express();
    app.use(express.json());
    app.use(morgan("dev"));
    app.use(cookieparser())


    //routes

    app.use("/api", indexRoute)



    //error middleware
    app.use(errorMiddleware)
    return app
};

export default createApp