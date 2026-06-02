class apierror extends Error {
    constructor(stataucode, message) {
        super(message)

        this.stataucode = stataucode;
        this.message = message;
        this.success = false
    }
}

module.exports = apierror