const express = require('express');
const upload = require('../config/multer');
const sendFile = require('../config/imagekit');

const fileroute = express.Router();

fileroute.post("/", upload.array("images", 4), async (req, res) => {

    let file = req.files;


    if (!file || file.length === 0) {
        return res.status(400).json({
            message: "files not found"
        })
    }

    let uploadedFiles = await Promise.all(
        file.map(async (elem) => {
            return await sendFile(elem.buffer, elem.originalname);
        })
    );

    let onlyUlr = uploadedFiles.map((elem) => elem.url);

    console.log("url", onlyUlr);

    res.send("ok")
})



module.exports = fileroute