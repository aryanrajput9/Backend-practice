import userModel from "../model/user.model.js";



export const createUser = async ({ username, email, password }) => {
    const user = await userModel.create({ username, email, password });

    return user
};

export const getUserByEmailOrUsername = async ({ email, username }) => {
    const user = await userModel.findOne({
        $or: [
            { email },
            { username }
        ]
    });

    return user
}


export const getMe = async (userId) => {
    const user = await userModel.findById(userId);
    return user
}