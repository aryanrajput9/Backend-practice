const jwt = require('jsonwebtoken');

let generateAccesstoken = (userId) => {

    return jwt.sign({ userId }, process.env.JWT_SECRATEKEY_ACCESS, { expiresIn: "15min" });

};

let generateRefreshtoken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRATEKEY_REFRESH, { expiresIn: "1d" })
};


module.exports = {
    generateAccesstoken, generateRefreshtoken
}