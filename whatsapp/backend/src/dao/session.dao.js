import sessionModel from "../model/session.model.js";



export const createSession = async ({ userId, refreshToken }) => {

    const session = await sessionModel.create({ userId, refreshToken });

    return session

}

export const getSessionById = async (userId) => {
    const session = await sessionModel.findOne({ userId });

    return session
}

export const updateSessionById = async ({ userId, refreshToken }) => {

    const session = await sessionModel.findByIdAndUpdate(
        userId,
        { refreshToken },
        { new: true }
    );

    return session
}

export const deleteSessionById = async (userId) => {

    const deletesession = await sessionModel.findByIdAndDelete(userId);

    return deletesession
}