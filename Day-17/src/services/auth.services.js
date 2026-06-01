const userModel = require("../model/user.model");
const apierror = require("../utils/apierror");
const { gerefreshtooken, geaccesstoken } = require("../utils/genearteTooken");
const jwt = require('jsonwebtoken')


const registerservices = async (data) => {
    const { name, email, password } = data;

    if (!email || !password) throw new apierror(409, "all field require");

    const isExiste = await userModel.findOne({ email });

    if (isExiste) throw new apierror(200, "already user register");

    const newUser = await userModel.create({
        username: name, email, password
    });


    let accesstokon = geaccesstoken(newUser._id);
    let refreshtoken = gerefreshtooken(newUser._id);

    newUser.refreshToken = refreshtoken;
    await newUser.save()

    return {
        accesstokon, refreshtoken, newUser
    }

};
const loginservices = async (data) => {

    const { email, password } = data;

    if (!email || !password) throw new apierror(409, "all field are required");

    const isExiste = await userModel.findOne({ email });

    if (!isExiste) throw new apierror(404, "unauthoriesed person");
    const comparepass = isExiste.comparePassword(password);


    if (!comparepass) {
        throw new apierror(404, "unauthorised persons")
    }


    let accesstokon = geaccesstoken(isExiste._id);
    let refreshtoken = gerefreshtooken(isExiste._id);

    isExiste.refreshToken = refreshtoken;
    await isExiste.save();

    return {
        accesstokon, refreshtoken, isExiste
    }
}

const refreshTokenservices = async (data) => {

    let refreshToken = data;

    if (!refreshToken) throw new apierror(404, "invalid user");

    let decode = jwt.verify(refreshToken, process.env.JWT_TOOKEN);
    if (!decode) throw new apierror(404, "invalid user");

    let user = await userModel.findById(decode.userId);

    if (refreshToken !== user.refreshToken) throw new apierror(404, "invalid user");

    const accesstokon = geaccesstoken(user._id);

    return {
        accesstokon
    }

}


module.exports = {
    registerservices, loginservices, refreshTokenservices
}