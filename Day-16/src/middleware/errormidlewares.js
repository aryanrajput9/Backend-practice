const errormiddlewares = (err, req, res, next) => {

    let statusCode = err.statusCode;
    let message = err.message;
    return res.status(statusCode).json({ message: message })


};

module.exports = errormiddlewares