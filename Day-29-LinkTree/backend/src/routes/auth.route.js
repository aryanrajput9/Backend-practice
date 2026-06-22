import express from 'express';
import { loginValidator, registerValidator } from '../validator/auth.validator.js';
import validationRequest from '../middlewares/validatorequest.middleware.js';
import { loginController, registerController } from '../controller/auth.controller.js';
import authMiddleware from '../middlewares/auth.middlewares.js';
import userModel from '../model/user.model.js';
import data from '../config/env.js';


const authRoutes = express.Router();

authRoutes.post("/register", registerValidator, validationRequest, registerController);

authRoutes.post("/login", loginValidator, validationRequest, loginController);

authRoutes.get("/me", authMiddleware, async (req, res) => {

    const user = await userModel.findById(req.user.id);

    res.status(200).json({
        message: "user found",
        data: user
    })

})

export default authRoutes