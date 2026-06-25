import { Router } from 'express';
import { registerUserController } from '../controller/authController.js';


const authRoute = Router();


authRoute.post("/registerUser", registerUserController)


export default authRoute