const express = require('express');
const { registerUser, loginUser } = require('../controller/authController');

const authRoute = express.Router();

authRoute.post('/createUser', registerUser);
authRoute.post('/findUser', loginUser)


module.exports = authRoute