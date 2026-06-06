class errorHandler extends Error {
    constructor(stataucode, message) {
        super(message)
        this.stataucode = stataucode;
        this.message = message
    }
};


module.exports = errorHandler