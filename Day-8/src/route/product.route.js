const express = require('express');
const { postProduct, getProduct } = require('../controller/productController');

const route = express.Router();


route.post("/createProduct", postProduct);
route.get("/", getProduct)

module.exports = route