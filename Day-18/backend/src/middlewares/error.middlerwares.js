const errormidlewares = (err, req, res, next) => {

    let statuscode = err.statuscode || 500;
    let message = err.message || "Internal server error";

    res.status(statuscode).json({ message: message });
};

module.exports = errormidlewares