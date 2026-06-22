import linkModel from "../model/link.model.js";
import userModel from "../model/user.model.js";


export const linkController = async (req, res) => {
    const user = req.user;
    const { title, url } = req.body;

    if (!title || !url) return res.status(400).json({
        message: "all field are required"
    });
    try {


        const newLink = await linkModel.create({
            user: user.id,
            title,
            url
        });

        return res.status(201).json({
            message: "link craete successfull",
            newLink
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || "failed to craete link"
        })
    }

}


export const getLinkByUsername = async (req, res) => {

    const { name } = req.params;

    const user = await userModel.findOne({ name });

    if (!user) return res.status(404).json({
        message: "user not found"
    });

    const link = await linkModel.find({ user: user._id });

    return res.status(200).json({
        message: "all link",
        link
    })
};

export const getUserById = async (req, res) => {
    const { id } = req.params;

    if (!id) return res.status(404).json({
        message: "user not found"
    });

    const link = await linkModel.find({
        user: id
    });

    return res.status(200).json({
        message: "all fetch",
        link
    })
};

export const getCountById = async (req, res) => {

    const { id } = req.params;
    const { count } = req.body


    if (!id) return res.status(404).json({
        message: "id not found"
    });


    console.log("ID:", id)
    console.log("BODY:", req.body);

    const user = await linkModel.findByIdAndUpdate(
        { _id: id, },
        {
            $inc: {
                clicks: count
            }
        },
        {
            returnDocument: "after"
        }
    );


    return res.status(200).json({
        message: "count update",
        user
    })



}