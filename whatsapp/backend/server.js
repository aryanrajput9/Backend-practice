import createApp from './src/app.js';
import env from './src/config/env.js';
import createDb from './src/database/db.js'
import { initialzeSocketServer } from './src/socket/socke.server.js';
import { createServer } from "http"




function startServer() {
    const app = createApp()
    const server = createServer(app)


    createDb();

    initialzeSocketServer(server)

    server.listen(env.PORT, () => {
        console.log("sever is running", env.PORT)
    })
};

startServer()