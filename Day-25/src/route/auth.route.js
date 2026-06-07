const express = require('express');
const { registerController,
    loginController,
    forgetpasswordController,
    resetPasswordController,
    updatepasswordController } = require('../controller/auth.controller');


const authRouter = express.Router();

authRouter.post("/register", registerController)

authRouter.post("/login", loginController);

authRouter.post("/forget-password", forgetpasswordController);
authRouter.get("/reset-password/:token", resetPasswordController);
authRouter.post("/update-password/:userId", updatepasswordController)


module.exports = authRouter