const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken')

const authRoute = express.Router();

authRoute.get(
    "/google",
    passport.authenticate("google", {
        scope: ["profile", "email"],
        session: false
    })
);


authRoute.get(
    "/google/callback",
    passport.authenticate("google", { failureRedirect: "/", session: false }),
    (req, res) => {
        let token = jwt.sign({ id: req.user.id }, process.env.JWT_ACCESSTOKEN, { expiresIn: "15min" });

        res.cookie("token", token);

        return res.send("ok")
    }

)


module.exports = authRoute