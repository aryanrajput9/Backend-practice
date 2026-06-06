const userModel = require("../src/model/user.model");
const emailTemp = require("../src/utils/emailtemplate");
const generatetoken = require("../src/utils/generatetoken");
const errorHandler = require("../src/utils/globelerrorhandler");
const sendEmail = require('../src/config/mailsyn')
const registerServices = async ({ name, email, password }) => {



    if (!email || !password) throw new errorHandler(409, "all field required");

    const isExiste = await userModel.findOne({ email });

    if (isExiste) throw new errorHandler(400, "User Already Register");

    const newUser = await userModel.create({
        name,
        email,
        password
    });

    return {
        newUser
    }

};

const loginServices = async (data) => {

    let { email, password } = data;

    if (!email || !password) throw new errorHandler(409, "All Field Required");

    const isExiste = await userModel.findOne({ email });

    if (!isExiste) throw new errorHandler(404, "Unauthorised person");

    const comparepass = isExiste.comparepassword(password);

    if (!comparepass) throw new errorHandler(404, "password incorrect");

    return {
        isExiste
    }
};

const foregetpasswordservices = async ({ email }) => {


    if (!email) throw new errorHandler(404, "email not found");

    const isExiste = await userModel.findOne({ email });

    if (!isExiste) throw new errorHandler(404, "user not found");

    let rowtoken = generatetoken(isExiste._id)

    let restLink = `http://localhost:3000/auth/reset-password/${rowtoken}`;

    let mailTemp = emailTemp(isExiste.name, restLink);

    await sendEmail(isExiste.email, "For Reset Password", mailTemp);

    return null

}




module.exports = {
    registerServices, loginServices, foregetpasswordservices,
}