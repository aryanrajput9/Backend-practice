const usreModel = require("../model/user.model");

const registeservices = async (data) => {

    const { name, email, password } = data;

    if (!email || !password) return Apierror(409, "all field requied");

    const newUser = await usreModel.create({
        username: name,
        email,
        password
    });

    return newUser
};


module.exports = registeservices