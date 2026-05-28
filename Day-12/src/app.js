const express = require('express');

const app = express();
const cookieParse = require('cookie-parser');
const authRoute = require('./routes/authroutes');
const postRoute = require('./routes/post.route');


app.use(express.json());
app.use(cookieParse());

app.use("/registerauth", authRoute);
app.use("/login", authRoute);
app.use("/post", postRoute)



module.exports = app