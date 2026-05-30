const express = require('express');
const authmiddleware = require('../middlewares/auth.middlewares');

const homeroutes = express.Router();

homeroutes.get("/", authmiddleware, async (req, res) => {

    return res.send("mai home pe aa gya hu")
})


module.exports = homeroutes