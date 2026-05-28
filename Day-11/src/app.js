const express = require('express');
const route = require('../routes/authroutes')
const cookiseParse = require('cookie-parser')



const app = express();
app.use(express.json());
app.use("/auth", route);
app.use(cookiseParse())

module.exports = app