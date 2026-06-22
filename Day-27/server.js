import dotenv from 'dotenv/config';
import app from './src/app.js';
import connectdb from './src/config/db.js'


connectdb()
const port = process.env.PORT

app.listen(port, () => {
    console.log(`server is running port ${port}`)
})