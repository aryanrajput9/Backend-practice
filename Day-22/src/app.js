const express = require('express');
const passport = require('passport');
const gooogleAuth = require('./middlewares/google.middlewares');
const authRoute = require('./routes/auth.route')

const app = express();

app.use(express.json());
app.use(passport.initialize());
passport.use(gooogleAuth());
app.use("/auth", authRoute);


app.use("/", (req, res) => {
    res.send("ho gya na ab")
})


module.exports = app