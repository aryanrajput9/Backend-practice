const express = require('express');
const authmiddlewares = require('../../middlewares/auth.middlewares');

const homeRoute = express.Router();

homeRoute.get("/", authmiddlewares, (req, res) => {
    return res.status(200).json({
        message: "mai home page pe hu"
    })
})

module.exports = homeRoute