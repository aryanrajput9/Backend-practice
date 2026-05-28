require('dotenv').config()
const app = require('./src/app');
const connectDb = require('./src/config/db')

const port = process.env.PORT

connectDb()
app.listen(port, () => {
    console.log(`app running in port ${port}`)
})