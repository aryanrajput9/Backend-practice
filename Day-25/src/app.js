
const express = require('express');
const globelerrorMiddlewares = require('./middlewares/error.middlerwares');
const authRouter = require('./route/auth.route');
const connectdb = require('./config/db');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectdb()
app.use(globelerrorMiddlewares);
app.use("/auth", authRouter);


module.exports = app