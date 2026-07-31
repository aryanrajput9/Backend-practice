import data from "../config/env.js";
import { commentDao } from "../dao/comment.dao.js";
import asyncHandler from "../utils/asyncHandler.js";


export const createCommentContorller = asyncHandler(async (req, res) => {



    const { id, userId, name, rating, comment } = req.body;


    const input = {
        productId: id,
        userId,
        name,
        rating,
        comment
    };

    console.log(input)

    const userComment = await commentDao.createComment(input);

    return res.status(201).json({
        message: "comment successfull",
        userComment
    })
});


export const getCommentByProductId = asyncHandler(async (req, res) => {
    const { id } = req.params;


    const productId = id


    const comments = await commentDao.findProductById(productId);

    return res.status(200).json({
        message: "comment find",
        data: comments.map(comment => ({
            id: comment._id,
            rating: comment.rating,
            review: comment.comment,
            date: comment.createdAt,
            name: comment.name
        }))
    })
})