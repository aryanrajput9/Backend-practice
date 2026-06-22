import express from 'express';
import apiRoutes from './routes/index.route.js'
import cookieparser from 'cookie-parser'
import cors from 'cors'


function createApp() {
    const app = express();

    app.use(express.json())
    app.use(cookieparser())

    app.use(
        cors({
            origin: "http://localhost:5173",
            credentials: true,
        })
    );

    app.use("/api", apiRoutes)

    return app
};

export default createApp