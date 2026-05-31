const express = require('express');
const Apierror = require('./utils/errorhandle');
const authroute = require('./route/auth.route');
const errormiddlewares = require('./middleware/errormidlewares');


const app = express();
app.use(express.json());


app.use("/auth", authroute)

app.use(errormiddlewares)

module.exports = app