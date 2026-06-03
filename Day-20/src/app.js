const epxress = require('express');
const filRoute = require('./routes/file.route');


const app = epxress();
app.use(epxress.json());

app.use(epxress.urlencoded({ extended: true }));
app.use("/auth", filRoute)



module.exports = app