import { Router } from 'express';
import { loginUserController, registerUserController } from '../controller/authController.js';
import { authMiddlerware } from '../middleware/auth.middleware.js';


const authRoute = Router();


authRoute.post("/registeruser", registerUserController)
authRoute.post("/loginuser", authMiddlerware, loginUserController)


export default authRoute