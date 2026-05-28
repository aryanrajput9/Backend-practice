require('dotenv').config();
const cors = require("cors")
const app = require('./src/app')
const connectdb = require('./src/config/db')
const port = process.env.PORT || 4000

connectdb()
app.use(cors())
app.listen(3000, () => {
    console.log(`server is runing ${port}`)
})