import { Router } from 'express';
import { registerUserController } from '../controller/auth.controller.js';

const authRouter = Router();

authRouter.post("/registeruser", registerUserController);

export default authRouter