class apierror extends Error {

    constructor(statuscode, message) {
        super(message);

        this.statuscode = statuscode;
        this.message = message;
        this.success = false
    }
};

module.exports = apierror