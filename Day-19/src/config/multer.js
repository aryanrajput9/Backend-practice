const multer = require('multer');

// const storage = multer.diskStorage({
//     destination: (req, file, cd) => {
//         cd(null, "./upload")
//     },
//     filename: (req, file, cd) => {
//         cd(null, Date.now() + file.originalname)
//     }
// })

let storage = multer.memoryStorage()

let upload = multer({ storage });

module.exports = upload