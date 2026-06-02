const cors = require('cors')
const express = require('express');
const errormidlewares = require('./middlewares/error.middlerwares');
const cookiepares = require('cookie-parser');
const authRoute = require('./route/auth.route')

const app = express();

app.use(express.json());
app.use(cookiepares());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use('/auth', authRoute)

app.use(errormidlewares)

module.exports = app