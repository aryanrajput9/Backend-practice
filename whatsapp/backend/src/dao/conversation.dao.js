import conversationModel from "../model/conversation.model.js";


export async function createConversation(participants = []) {

    const conversations = await conversationModel.create({ participants });
    return conversations

};

export async function getConversationById(conversationId) {

    const conversation = await conversationModel.findById(conversationId);
    return conversation

};

export async function getConversationsByUserId(userId) {

    const conversation = await conversationModel.find({
        participants: { $in: [userId] }
    });

    return conversation
};

export async function getConversationByParticipants(participants = []) {

    const conversation = await conversationModel.findOne({
        participants: { $all: participants }
    });

    return conversation

};

