import { createCatgoryDao } from "../dao/category.dao.js";
import ApiError from "../utils/apiresponse.js";
import asyncHandler from "../utils/asyncHandler.js";


export const createCatgoryController = asyncHandler(async (req, res) => {

    const { name, slug, image, } = req.body

    if (!name || !slug || !image) throw new ApiError(401, "All field are required");


    const category = await createCatgoryDao(name, slug, image);


    return res.status(201).json({
        message: "category create successfull",
        category: category
    })

})