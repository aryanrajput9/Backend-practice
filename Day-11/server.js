require('dotenv').config()
const app = require('./src/app');
const connectDb = require('./src/config/database')


connectDb()
const port = process.env.PORT

app.listen(port, () => {
    console.log(`server is running port ${port}`)
})