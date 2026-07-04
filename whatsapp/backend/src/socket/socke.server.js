import { Server } from 'socket.io'
import { verifyAccessToken } from '../utils/auth.utils.js';
import conversationModel from '../model/conversation.model.js';
import { createConversation, getConversationByParticipants } from '../dao/conversation.dao.js';
import { createMessage } from '../dao/message.dao.js';




export function initialzeSocketServer(httpServer) {

    const io = new Server(httpServer);

    io.use((socket, next) => {

        const token = socket.handshake.headers.authorization?.split(" ")[1];

        if (!token) {
            return next(new Error("Authorization error:no token provide"))
        };

        try {

            const decode = verifyAccessToken(token);

            socket.userId = decode.id;

            next()

        } catch (error) {
            return next(new Error("Authorization error:no token invalid"))
        }
    });

    io.on("connection", (socket) => {
        console.log("A user connected:", socket.id);

        socket.join(socket.userId)

        socket.on("sendMessage", async (data) => {


            const isConversationExists = await getConversationByParticipants([socket.userId, data["receiver"]]);

            let conversationId = isConversationExists?._id

            if (!isConversationExists) {
                const conversation = await createConversation([socket.userId, data['receiver']]);


                conversationId = conversation._id
            };

            await createMessage({
                conversationId: isConversationExists?._id || conversationId,
                senderId: socket.userId,
                content: data["content"]
            });



            const receiver = data["receiver"];

            io.timeout(10000).to(receiver).emit("recevieMessage", data, (err, response) => {
                console.log("Message sent to receiver", receiver, "Error", err, "Response", response)
            })


        });

        io.on("disconnect", () => {
            console.log("A user disconnect", socket.userId);
            socket.leave(socket.userId)
        })
    });

}