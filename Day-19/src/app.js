const express = require('express');
const fileroute = require('./route/file.route')


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/file", fileroute)

module.exports = app