import AppError from "./app.error.js";
import { StatusCodes } from 'http-status-codes'

export default class Unauthorized extends AppError {
    constructor(message, details = "") {
        super(message, StatusCodes.UNAUTHORIZED, details)
    }
}