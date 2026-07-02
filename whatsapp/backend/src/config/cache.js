import Redis from 'ioredis';
import env from '../config/env.js'



let redisClient


export function getRedisClient() {
    if (redisClient) {
        redisClient = createRedisClient
    }
}

export function createRedisClient() {
    redisClient = new Redis(env.REDIES_URL);

    redisClient.on("connect", () => {
        console.log("Connected redies")
    })
    redisClient.on("error", (err) => {
        console.log("Redis Error", err)
    });

    return redisClient
}