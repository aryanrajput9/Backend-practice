import helmet from "helmet";
import cors from 'cors';
import env from '../config/env.js';
import compression from 'compression';
import hpp from 'hpp';
import express from 'express';
import ratelimit from 'express-rate-limit';
import cookieparser from 'cookie-parser'

const securityMiddleware = (app) => {
    app.use(cors({
        origin: env.CORSE_ORIGINE,
        credentials: true,
    }));
    app.use(helmet());
    app.use(compression());
    app.use(hpp());
    app.use(express.json({ limit: "3mb" }));
    app.use(ratelimit({
        windowMs: env.WINDOW_LIMIT,
        limit: env.RATE_LIMIT,
        legacyHeaders: true,
        message: "to many attempt"
    }));
    app.use(express.urlencoded({ extended: true, limit: "3mb" }));
    app.use(cookieparser())
};


export default securityMiddleware