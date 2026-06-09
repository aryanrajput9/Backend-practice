const errorHandlerMiddleware = (err, req, res, next) => {
    const statuscode = err.statuscode || 500;
    const message = err.message || "Internal server error";

    return res.status(statuscode).json({ message: message })
};


module.exports = errorHandlerMiddleware