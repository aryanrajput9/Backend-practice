import adminModel from "../model/admin.model.js";



export const createAdmin = async (name, email, password) => {
    const admin = await adminModel.create({
        name, email, password
    });

    return admin
};

export const adminFindByemail = async (email) => {
    const admin = await adminModel.findOne({ email });

    return admin
}