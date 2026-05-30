const express = require('express');
const cookiepasre = require('cookie-parser');
const authRoute = require('./route/auth.route');
const homeroutes = require('./route/home.route')

const app = express();


app.use(express.json());
app.use(cookiepasre());
app.use("/auth", authRoute);
app.use('/home', homeroutes)


module.exports = app