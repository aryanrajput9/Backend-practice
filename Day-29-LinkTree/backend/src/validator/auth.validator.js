import { body } from 'express-validator';

export const registerValidator = [
    body("name").
        trim()
        .notEmpty()
        .withMessage("name is required"),

    body("email").trim()
        .isEmail()
        .withMessage("email is required")
        .normalizeEmail(),
    body("password")
        .trim()
        .isLength({ min: 6 })
        .withMessage("password is required")
];

export const loginValidator = [
    body("identifier")
        .trim()
        .notEmpty()
        .withMessage("Identifier is required"),

    body("password")
        .trim()
        .notEmpty()
        .withMessage("Password is required"),
];