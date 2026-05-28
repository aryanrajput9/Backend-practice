require('dotenv').config()
const app = require('./src/app');
const connectDb = require('./config/db')


connectDb()

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`server is runnging ${port}`)
})