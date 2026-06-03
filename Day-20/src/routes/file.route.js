const express = require('express');
const upload = require('../config/multer');
const sendFile = require('../config/imagekite');
const fileModel = require('../models/file.model');

const filRoute = express.Router();

filRoute.post("/file", upload.single("image"), async (req, res) => {

    let file = req.file;


    if (!file || !file.length === 0) {
        return res.status(400).json({
            message: "file not found"
        })
    }

    let uploadedFiles = await sendFile(
        file.buffer,
        file.originalname
    )

    let onlyurl = uploadedFiles.url;

    const newFile = await fileModel.create({
        fileurl: onlyurl,
    });

    return res.status(200).json({
        message: "photo url create",
        imageurl: newFile
    })
})

module.exports = filRoute