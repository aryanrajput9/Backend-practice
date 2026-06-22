import express from 'express';
import { accessNotecontroller, createNotecontroller, deleteNotecontroller, updateNotecontroller } from '../controller/craeteNote.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const createNote = express.Router();

createNote.post("/note/create", authMiddleware, createNotecontroller);
createNote.get("/note/fetch", authMiddleware, accessNotecontroller);
createNote.patch("/note/update/:id", authMiddleware, updateNotecontroller);
createNote.delete("/note/delete", authMiddleware, deleteNotecontroller)

export default createNote