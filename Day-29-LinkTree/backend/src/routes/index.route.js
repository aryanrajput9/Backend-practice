import express from 'express';
import authRoutes from './auth.route.js';
import linkRoute from './links.route.js';


const router = express.Router();

router.use("/auth", authRoutes)
router.use("/link", linkRoute)


export default router