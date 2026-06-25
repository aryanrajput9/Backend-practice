import { Router } from 'express';
import authRoute from './auth.route.js'


const indexRoute = Router();


indexRoute.use("/auth", authRoute)


export default indexRoute