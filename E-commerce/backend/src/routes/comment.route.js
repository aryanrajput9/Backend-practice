import { Router } from 'express'
import { createCommentContorller, getCommentByProductId } from '../controller/comment.controller.js';



const commentRoute = Router();

commentRoute.post("/createComment", createCommentContorller);
commentRoute.get("/findcomment/:id", getCommentByProductId);



export default commentRoute