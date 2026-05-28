const express = require('express');
const getContoller = require('../controller/authContoller');
const route = express.Router();

route.post('/create', getContoller)


module.exports = route