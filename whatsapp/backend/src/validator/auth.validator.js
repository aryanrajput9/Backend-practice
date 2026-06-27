
import { body, validationResult } from 'express-validator'

export const registerValidator = () => {
    body("username").trim()
        .notEmpty()
        .withMessage("username is required")

    body("email").trim()
        .normalizeEmail()
        .notEmpty.withMessage("Email is required")
        .isEmail().withMessage("Enter a valid email")

    body("password").trim()
        .notEmpty().withMessage("Password is reqiured")
        .isLength().withMessage("password must be at least 6 characters")

    validationResult
}

export const loginValidator = () => {
    body("email").trim()
        .normalizeEmail()
        .notEmpty().withMessage("Email is required")
        .isEmail().withMessage("Enter a valid email")

    body("password").trim()
    notEmpty().withMessage("Password is reqiured")
        .isLength().withMessage("password must be at least 6 characters")

    validationResult

}