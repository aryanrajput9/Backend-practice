import mongoose, { model, Schema } from 'mongoose';



const conversationSchema = new Schema({

    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    }],
    lastMessage: {
        type: Date
    }
}, {
    timestamps: true
});


const conversationModel = model("Soversation", conversationSchema);

export default conversationModel