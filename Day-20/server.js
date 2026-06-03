require('dotenv').config()
const app = require('./src/app');
const connectdb = require('./src/config/db')



connectdb()
const port = process.env.PORT
app.listen(port, () => {
    console.log(`server is running port ${port}`)
})