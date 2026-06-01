const express = require('express');
const authmiddleware = require('../middlewares/auth.middlewares');
const apiresponse = require('../utils/apiresponse');

const homeRoue = express.Router();


homeRoue.get("/", authmiddleware, (req, res) => {
    res.status(200).json(new apiresponse("home ke ander hu", req.user))
});

module.exports = homeRoue


