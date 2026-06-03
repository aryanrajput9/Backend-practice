const imagekite = require('imagekit');


const storageInstance = new imagekite({
    urlEndpoint: process.env.IMAGEKIT_URL,
    publicKey: process.env.PUBLIC_KEY,
    privateKey: process.env.PRIAVTE_KEY
});

let sendFile = async (file, fileName) => {
    let option = {
        file, fileName
    }

    return await storageInstance.upload(option)
};

module.exports = sendFile

