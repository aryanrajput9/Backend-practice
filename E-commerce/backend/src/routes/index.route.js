import { Router } from 'express';
import authRoute from './auth.route.js'
import productRouter from './product.route.js';
import categoryRouter from './category.route.js';
import adminRouter from './adminauth.route.js';


const indexRoute = Router();


indexRoute.use("/auth", authRoute);
indexRoute.use("/product", productRouter);
indexRoute.use("/category", categoryRouter);
indexRoute.use("/admin", adminRouter)

export default indexRoute