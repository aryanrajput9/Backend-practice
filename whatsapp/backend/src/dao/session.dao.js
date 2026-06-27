import sessionModel from "../model/session.model.js";



export const createSession = async ({ userId, refreshToken }) => {

    const session = await sessionModel.create({ userId, refreshToken });

    return session

}

export const getSessionById = async (userId) => {
    const session = await sessionModel.findOne({ userId });

    return session
}