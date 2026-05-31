const express = require('express');
const regsiterController = require('../controller/auth.controller');

const authroute = express.Router();

authroute.post("/regsiteruser", regsiterController);


module.exports = authroute