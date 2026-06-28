import { body } from "express-validator";

export const registerValidator = [
    body("username")
        .trim()
        .notEmpty()
        .withMessage("Username is required"),

    body("email")
        .trim()
        .normalizeEmail()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Enter a valid email"),

    body("password")
        .trim()
        .notEmpty()
        .withMessage("Password is required")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters"),
];

export const loginValidator = [
    body("email")
        .trim()
        .normalizeEmail()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Enter a valid email"),

    body("password")
        .trim()
        .notEmpty()
        .withMessage("Password is required")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters"),
];