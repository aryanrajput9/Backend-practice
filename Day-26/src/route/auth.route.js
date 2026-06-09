const express = require('express');
const { registerController, loginController, forgetpasswordController, resetpasswordController, updatepasswordController, logout } = require('../controller/auth.controller');

const authRoute = express.Router();


authRoute.post("/register", registerController);
authRoute.post("/login", loginController);
authRoute.post("/forget-password", forgetpasswordController);
authRoute.get("/reset-password/:token", resetpasswordController);
authRoute.post("/update-password/:userId", updatepasswordController);
authRoute.get("/logout", logout)

module.exports = authRoute