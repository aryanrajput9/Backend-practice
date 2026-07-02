

export const globelErrorHandler = (err, req, res, next) => {

    return res(err.statuscode).json({
        message: err.message
    })

}