import { CommentModel } from "../model/comment.model.js";



export const commentDao = {
    async createComment(input) {

        const comment = await CommentModel.create(input);
        return comment
    },

    async findProductById(productId) {
        const comment = await CommentModel.find({ productId });
        console.log(productId)
        return comment
    }
}