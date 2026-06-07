const jwt = require('jsonwebtoken')
const geneatetoken = (userId) => {
    return jwt.sign({ id: userId },
        process.env.JWT_ROWTOKEN,
        { expiresIn: "15min" })
};

module.exports = geneatetoken