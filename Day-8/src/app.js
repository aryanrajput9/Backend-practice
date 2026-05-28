const express = require('express');
const route = require('./route/product.route');

const app = express()

app.use(express.json());
app.use("/product", route);
app.use('/product', route)
module.exports = app