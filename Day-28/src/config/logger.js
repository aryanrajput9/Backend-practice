import pino from 'pino';
import appConstant from '../constant/app.constant.js';


const logger = pino({
    level: appConstant.LOGGER_LEVEL,
    transport: {
        target: "pino-pretty"
    }
});

export default logger