const express = require('express');
const jwt = require('jsonwebtoken');
const userModel = require('../model/user.model');


const postRoute = express.Router();


postRoute.get("/",
    async (req, res, next) => {

        try {
            let token = req.cookies.token

            if (!token) {
                return res.status(404).json({
                    message: "token not found"
                })
            };

            let decode = jwt.verify(token, process.env.JWT_TOKEN);

            if (!decode) {
                return res.status(401).json({
                    message: "unothorized user"
                })
            };

            let user = await userModel.findById(decode.id);


            req.user = user

            next();




        } catch (error) {

            console.log("error in postrote", error)
        }

    },
    (req, res) => {
        return res.send("ok me instagram ke andr agya hu");
    });

module.exports = postRoute