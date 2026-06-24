import express from 'express';
import passport from 'passport'
import AuthController from './auth.controller.js';
import { asyncHandler } from '../../utils/asyncHandler.js';


const authRouter = express.Router();

const authController = new AuthController()

authRouter.get(
    "/google",
    passport.authenticate("google", {
        scope: ["profile", "email"],
        prompt: "select_account"
    })
);
authRouter.get("/google/callback", passport.authenticate("google",
    { session: false }), asyncHandler(authController.GoogleCallBack.bind(authController)));

authRouter.get("/test", (req, res) => {
    return res.send("ok")
})


export default authRouter