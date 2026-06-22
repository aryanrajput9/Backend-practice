import express from 'express';
import cookieparser from 'cookie-parser';
import authRoute from './route/auth.route.js';
import createNote from './route/craetenote.route.js';



const app = express();
app.use(express.json())

app.use(cookieparser());

app.use("/auth", authRoute);
app.use("/api", createNote)


export default app