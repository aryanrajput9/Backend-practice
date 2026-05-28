require('dotenv').config()
const app = require('../backend/src/app');
const connectDb = require('./src/config/db')

connectDb()
app.listen(process.env.PORT, () => {
    console.log(`server runnig port ${process.env.PORT}`)
})