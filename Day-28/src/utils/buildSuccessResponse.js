import { StatusCodes } from "http-status-codes";


export const buildSucessResponse = (res, message, statusCode, data) => {

    res.status(statusCode || StatusCodes.OK).json({
        success: true,
        message,
        data
    })

}