const express = require('express');
const app = express();
const route = require('./routes/auth.route')


app.use(express.json())
app.use('/create', route)
module.exports = app