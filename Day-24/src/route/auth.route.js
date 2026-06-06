const express = require("express");
const { registerController, loginController, forgetPassword, resetpasswordcontroller, updatepasswordcontroller } = require("../controller/auth.controller");

const routes = express.Router();


routes.post("/register", registerController);
routes.post("/login", loginController);
routes.post("/forget-password", forgetPassword);
routes.get("/reset-password/:token", resetpasswordcontroller);
routes.post("/update-password/:userId", updatepasswordcontroller)


module.exports = routes