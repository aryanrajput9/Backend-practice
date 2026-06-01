const express = require('express');
const { registerController, loginController, regenrateaccesstoken } = require('../controller/auth.controller');


const authroute = express.Router();

authroute.get("/getoken", regenrateaccesstoken)
authroute.post("/registerUsers", registerController);
authroute.post("/loginuser", loginController)


module.exports = authroute