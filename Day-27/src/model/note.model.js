import mongoose from 'mongoose';


const noteSchema = new mongoose.Schema({
    tittle: String,
    discription: String,
    user: String
}, {
    timestamps: true
});

const noteModel = mongoose.model("note", noteSchema);

export default noteModel