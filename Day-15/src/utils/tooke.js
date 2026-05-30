const jwt = require('jsonwebtoken')

const generateRefreshtooken = (userId) => {

    return jwt.sign({ userId }, process.env.JWT_REFRESHTOOKEN, { expiresIn: "1d" })

};

const generateAccesstooken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_ACCESSTOOKEN, { expiresIn: "15min" })
}

module.exports = {
    generateAccesstooken, generateRefreshtooken
}

