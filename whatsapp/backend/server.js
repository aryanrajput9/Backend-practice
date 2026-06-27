import createApp from './src/app.js';
import env from './src/config/env.js';
import createDb from './src/database/db.js'


function createServer() {
    const app = createApp();

    createDb()

    app.listen(env.PORT, () => {
        console.log("sever is running", env.PORT)
    })
};

createServer()