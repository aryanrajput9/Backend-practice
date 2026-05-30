const express = require('express');
const { registercontroller, logicontroller, regenrateaccesstoken } = require('../controller/auth.controller');

const authRoute = express.Router();

authRoute.get("/", regenrateaccesstoken)
authRoute.post("/registeruser", registercontroller);
authRoute.post('/login', logicontroller);


module.exports = authRoute