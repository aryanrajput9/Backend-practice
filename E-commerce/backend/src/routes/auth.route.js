import { Router } from 'express';
import { getCurrentUser, getRefreshToken, loginUserController, registerUserController } from '../controller/auth.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';


const authRoute = Router();


authRoute.post("/registeruser", registerUserController)
authRoute.post("/loginuser", loginUserController);

authRoute.get("/current-user", authMiddleware, getCurrentUser);

authRoute.post("/refresh-token", getRefreshToken)


export default authRoute