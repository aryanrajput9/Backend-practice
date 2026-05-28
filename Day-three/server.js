
const app = require('../Day-three/src/app');
const connectDb = require('../Day-three/config/db');


connectDb()

app.listen(3000, () => {
    console.log("server running 3000 port")
})