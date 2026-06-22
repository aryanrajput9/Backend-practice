import mongoose from "mongoose";
import noteModel from "../model/note.model.js";

const createNotecontroller = async (req, res) => {

    let { tittle, discription } = req.body;

    if (!tittle || !discription) return res.status(400).json({
        message: "all field required"
    });

    if (tittle.trim().lenght < 3) return res.status(400).json({
        message: "tittle mist be at least 3 character long"
    });

    if (discription.trim().lenght < 10) return res.status(400).json({
        message: "discription mist be at least 3 character long"
    });

    const newNote = await noteModel.create({
        tittle,
        discription,
        user: req.user.email
    });

    return res.status(201).json({
        message: "note craete successfull",
        data: newNote
    })

};

const accessNotecontroller = async (req, res) => {
    const notes = await noteModel.find({
        user: req.user.email
    });

    if (!notes) return res.status(404).json({
        message: "email not found"
    });

    return res.status(200).json({
        message: "email fetched",
        notes
    })
};

const updateNotecontroller = async (req, res) => {

    const userId = req.params;
    const discription = req.body;

    if (!mongoose.Types.ObjectId.isValid(userId)) return res.status(400).json({
        message: "invalid id"
    });

    if (!discription.trim()) return res.status(400).json({
        message: "invalid discription"
    });

    const note = await noteModel.find({
        userId,
        user: req.user.email
    });

    if (!note) return res.status(400).json({
        message: "note not found",
    });

    note.discription = discription;
    await note.save();

    return res.status(200).json({
        message: "note update",
        note
    })



};

const deleteNotecontroller = async (req, res) => {

    let id = req.params;

    if (!mongoose.Types.ObjectId(id)) return res.status(404).json({
        message: "id not found"
    });

    const note = await noteModel.find({
        id,
        user: req.user.email
    });

    if (!note) return res.status(400).json({
        message: "note not found"
    });

    await noteModel.findByIdAndDelete(note);

    return res.status(200).json({
        message: 'note delete '
    })

}

export {
    createNotecontroller, accessNotecontroller, updateNotecontroller, deleteNotecontroller
}