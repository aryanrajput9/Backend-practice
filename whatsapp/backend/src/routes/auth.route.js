import { Router } from 'express';
import { getCurrentUserController, getMeController, loginUserController, logoutUserCOntroller, refreshTokenGenrate, registerUserController } from '../controller/auth.controller.js';
import { loginValidator, registerValidator } from '../validator/auth.validator.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const authRouter = Router();

authRouter.post("/registeruser", registerValidator, registerUserController);
authRouter.post("/loginuser", loginValidator, loginUserController);
authRouter.get("/logoutuser", logoutUserCOntroller);
authRouter.post("/refresh-token", refreshTokenGenrate);
authRouter.get("/getme", getMeController);

authRouter.get("/current-user", authMiddleware, getCurrentUserController)

export default authRouter