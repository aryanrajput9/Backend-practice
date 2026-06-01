const jwt = require('jsonwebtoken');

const geaccesstoken = (userId) => {

    return jwt.sign({ userId }, process.env.JWT_TOOKEN, {
        expiresIn: "15min"
    })
};

const gerefreshtooken = (userId) => {

    return jwt.sign({ userId }, process.env.JWT_TOOKEN, {
        expiresIn: "1d"
    })
};

module.exports = { geaccesstoken, gerefreshtooken }