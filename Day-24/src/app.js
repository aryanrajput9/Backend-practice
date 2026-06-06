const express = require('express');
const errorMiddlewares = require('../middlewares/error.middlewares');
const routes = require('./route/auth.route')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorMiddlewares);

app.use("/auth", routes)

module.exports = app
