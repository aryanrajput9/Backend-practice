import messageModel from "../model/message.model.js";


export async function createMessage(messageData) {

    const message = await messageModel.create(messageData);
    return message

}