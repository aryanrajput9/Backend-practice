import createApp from './src/app.js';
import env from './src/config/env.js'
import createDb from './src/db/mongoose.js'





function startServer() {
    const app = createApp();
    createDb()
    app.listen(env.PORT, () => {
        console.log(`server is running ${env.PORT}`)
    })
};

startServer()