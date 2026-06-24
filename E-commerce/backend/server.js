import createApp from "./src/app.js";
import env from './src/config/env.js'



function startServer() {
    const app = createApp();

    app.listen(env.PORT, () => {
        console.log(`server is running port ${env.PORT}`)
    })
};

startServer()