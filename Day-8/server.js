require('dotenv').config()
const app = require('./src/app');
const connectDb = require('./src/config/db')
const port = process.env.PORT;


connectDb()
app.listen(process.env.port, () => {
    console.log(`"server is running ${port} port"`)
})