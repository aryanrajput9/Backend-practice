import { Router } from 'express';
import { loginUserController, logoutUserCOntroller, registerUserController } from '../controller/auth.controller.js';
import { loginValidator, registerValidator } from '../validator/auth.validator.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const authRouter = Router();

authRouter.post("/registeruser", registerValidator, registerUserController);
authRouter.post("/loginuser", loginValidator, authMiddleware, loginUserController);
authRouter.get("/logoutuser", logoutUserCOntroller)

export default authRouter