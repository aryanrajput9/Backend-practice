const jwt = require('jsonwebtoken')

const generatetoken = (userId) => {
    return jwt.sign({ id: userId },
        process.env.JWT_ROWTOKEN,
        { expiresIn: "15min" })
};

module.exports = generatetoken