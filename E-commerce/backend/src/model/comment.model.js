import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema(
    {
        productId: {
            type: Schema.Types.ObjectId,
            ref: "product",
            required: true,
        },

        userId: {
            type: Schema.Types.ObjectId,
            ref: "user-datas",
            required: true,
        },

        name: {
            type: String,
            required: true,
            trim: true,
        },

        rating: {
            type: String,
            required: true,

        },

        comment: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

export const CommentModel = mongoose.model("Comment", commentSchema);