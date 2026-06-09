const express = require('express');
const authRoute = require('./route/auth.route');
const connectRedis = require('./config/cache');
const cookieparser = require('cookie-parser');
const authMiddleware = require('./middlewares/auth.middlewares')

const app = express();


connectRedis.on("connect", () => {
    console.log('redis connected')
});
connectRedis.on("error", (err) => {
    console.log('redis error', err)
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser())

app.use("/auth", authRoute)

app.get('/', (req, res) => {
    res.render('index.ejs')
});
app.get("/main", authMiddleware, (req, res) => {
    res.status(200).json({
        message: "mai main ke ander hu"
    })
})
module.exports = app