const express = require("express");
const registerController = require("../controller/authController");


const route = express.Router();


route.post("/createUser", registerController)


module.exports = route