import { Router } from 'express';
import authMiddleware from '../middlewares/auth.middlewares.js';
import { getCountById, getLinkByUsername, getUserById, linkController } from '../controller/link.controller.js';


const linkRoute = Router();


linkRoute.post("/", authMiddleware, linkController);
linkRoute.get("/:name", getLinkByUsername);
linkRoute.get("/profile/:id", getUserById);
linkRoute.patch("/count/:id", getCountById)

export default linkRoute