require('dotenv').config()
const app = require('./src/app');
const connectDb = require('./src/config/database')
const port = process.env.PORT

connectDb()

app.listen(port, () => {
    console.log(`server is runnig port  ${port}`)
})