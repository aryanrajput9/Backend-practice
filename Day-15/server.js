require('dotenv').config();
const app = require('./src/app');
const connectdb = require('./src/config/database');


connectdb()

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`server is runing on port ${port}`)
})