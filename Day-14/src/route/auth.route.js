const express = require('express');
const { registerAuthcontroller, loginAuthcontroller, createRefreshTooken } = require('../controller/auth.controller');

const authRoute = express.Router();


authRoute.get("/genatetoken", createRefreshTooken)

authRoute.post("/makeUser", registerAuthcontroller);
authRoute.post("/logins", loginAuthcontroller)


module.exports = authRoute