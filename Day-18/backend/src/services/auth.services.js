const userModel = require("../model/user.model");
const apierror = require('../utils/apierror');
const { geaccesstoken, gerefreshtoken } = require('../utils/tokengerator');


const registerservices = async (data) => {
    const { name, email, password } = data;

    if (!email || !password) throw new apierror(409, "all field are required");

    const isExist = await userModel.findOne({ email });

    if (isExist) throw new apierror(401, "user already exist");

    const newUser = await userModel.create({
        username: name,
        email, password
    });

    const accesstoke = geaccesstoken(newUser._id);
    const refreshtoken = gerefreshtoken(newUser._id);

    newUser.refreshtoken = refreshtoken;
    await newUser.save()

    return {
        accesstoke, refreshtoken, newUser
    }

}

const loginservices = async (data) => {
    let { email, password } = data;

    const user = await userModel.findOne({ email });

    if (!user) throw new apierror(404, "unauthorised person");

    const comparepass = user.comparepassword(password);

    if (!comparepass) throw new apierror(404, "unauthorised person");

    let accesstoke = geaccesstoken(user._id);
    let refreshtoken = gerefreshtoken(user._id);

    user.refreshtoken = refreshtoken;
    await user.save();

    return {
        accesstoke, refreshtoken, user
    }

}


module.exports = {
    registerservices, loginservices
}