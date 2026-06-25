import createApp from "./src/app.js";
import env from './src/config/env.js';
import craeteDb from './src/database/db.js';




function startServer() {
    const app = createApp();
    craeteDb();



    app.listen(env.PORT, () => {
        console.log(`server is running port ${env.PORT}`)
    })
};

startServer()