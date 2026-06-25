import { Router } from 'express';
import { loginUserController, registerUserController } from '../controller/authController.js';


const authRoute = Router();


authRoute.post("/registeruser", registerUserController)
authRoute.post("/loginuser", loginUserController)


export default authRoute