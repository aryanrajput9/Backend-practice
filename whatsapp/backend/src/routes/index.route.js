import { Router } from 'express';
import authRouter from './auth.route.js';

const indexRoute = Router();

indexRoute.use("/auth", authRouter)

export default indexRoute