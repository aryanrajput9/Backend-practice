const jwt = require('jsonwebtoken')
const geaccesstoken = (userId) => {

    return jwt.sign({ userId }, process.env.JWT_TOOKEN_ACCESS, { expiresIn: "15min" });
};

const gerefreshtoken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_TOOKEN_REFRESH, { expiresIn: "1d" })
};

module.exports = {
    geaccesstoken, gerefreshtoken
}