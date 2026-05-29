const express = require('express');
const cookieparse = require('cookie-parser')
const app = express();
const authRoute = require('./route/auth.route');
const homeRoute = require('./route/home.route');

app.use(express.json());
app.use(cookieparse());
app.use('/auth', authRoute)
app.use('/home', homeRoute)

module.exports = app