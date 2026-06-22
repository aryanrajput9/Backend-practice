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
            origin: "https://backend-practice-lhab3yziw-aryanrajput9s-projects.vercel.app/",
            credentials: true,
        })
    );

    app.use("/api", apiRoutes)

    return app
};

export default createApp