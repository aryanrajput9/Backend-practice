const express = require('express');
const { registercontroller, logincontroller } = require('../controller/auth.controller');
const authmiddlerwares = require('../middlewares/auth.middlewares');


const authRoute = express.Router();

authRoute.get("/me", authmiddlerwares, (req, res) => {
    try {
        return res.status(200).json({
            message: "mai aa gya hu home me",
            user: req.user
        })
    } catch (error) {
        console.log("error in api", error)
    }
})

authRoute.post("/logout", async (req, res) => {
    try {
        res.clearCookie("accesstoke");
        res.clearCookie("refreshtoken");

        return res.status(200).json({
            message: "logout successfull"
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
})
authRoute.post('/registeruser', registercontroller)
authRoute.post('/login', logincontroller);


module.exports = authRoute