const imagekit = require('imagekit');

const storageInstance = new imagekit({
    urlEndpoint: process.env.URL_endpoint,
    privateKey: process.env.Private_key,
    publicKey: process.env.Public_key

});

let sendFile = async (file, fileName) => {
    let option = {
        file, fileName
    };

    return await storageInstance.upload(option)
};

module.exports = sendFile