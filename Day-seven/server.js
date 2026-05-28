const app = require('./src/app');
const connectdb = require('./src/config/database')

connectdb()
app.listen(3000, () => {
    console.log("server is running port 3000")
})
