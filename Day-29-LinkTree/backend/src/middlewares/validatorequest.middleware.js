import { validationResult } from 'express-validator'


const validationRequest = (req, res, next) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
        console.log(error.array());

        return res.status(400).json({
            message: "validation failed",
            errors: error.array().map((error) => ({
                field: error.path,
                message: error.msg
            }))
        });
    }
    next()
};

export default validationRequest