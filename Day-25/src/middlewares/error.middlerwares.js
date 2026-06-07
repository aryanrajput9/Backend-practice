const globelerrorMiddlewares = (err, req, res, next) => {
    let statuscode = err.statuscode || 500;
    let message = err.message || "Internal Server Error";

    return res.status(statuscode).json({ message: message })
};

module.exports = globelerrorMiddlewares