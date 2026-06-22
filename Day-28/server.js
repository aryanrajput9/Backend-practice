import createApp from './src/app.js';
import env from './src/config/env.js';
import connectdb from './src/config/db.js'
import logger from './src/config/logger.js';




const app = createApp()

function startServer() {
    connectdb().then(() => {
        app.listen(env.PORT, () => {
            logger.info({ port: env.PORT }, "server is runnging")
        })
    }).catch((err) => {
        logger.error({ error: err }, "error in running server")
    })
};

startServer()

