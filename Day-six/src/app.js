const express = require('express');
const app = express();
const postUser = require('./controller/usercontroller')

app.use(express.json())
app.use("/create-user", postUser)




module.exports = app