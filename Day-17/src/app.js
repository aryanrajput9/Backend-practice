const express = require('express');
const errormiddleware = require('./middlewares/error.middleware');
const cookiesparser = require('cookie-parser');
const authroute = require('./route/auth.routes');
const homeRoue = require('./route/home.route');

const app = express();


app.use(express.json());
app.use(cookiesparser());
app.use("/auth", authroute);
app.use("/home", homeRoue)


app.use(errormiddleware);


module.exports = app