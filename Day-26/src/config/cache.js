const Redis = require('ioredis');


const connectRedis = new Redis({
    port: process.env.REIDS_PORT,
    host: process.env.REIDS_HOST,
    password: process.env.REIDS_PASSWORD
});


module.exports = connectRedis


