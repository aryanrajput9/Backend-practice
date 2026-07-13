import { Router } from 'express';
import { adminRefreshGeneraterToken, createAdminController, getCurrentAdmin, loginAdminController } from '../controller/admin.controller.js';
import { adminMiddleware } from '../middleware/admin.middleware.js';


const adminRouter = Router();

adminRouter.post("/createAdmin", createAdminController);
adminRouter.post("/loginAdmin", loginAdminController);
adminRouter.get("/get-currAdmin", adminMiddleware, getCurrentAdmin);
adminRouter.post("/adminrefresh-token", adminRefreshGeneraterToken)


export default adminRouter