
import { createCatgoryDao, getCategoryDao, getCategoryById, updateCategory } from "../dao/category.dao.js";
import categoryModel from "../model/category.model.js";
import ApiError from "../utils/apiresponse.js";
import asyncHandler from "../utils/asyncHandler.js";


export const createCatgoryController = asyncHandler(async (req, res) => {

    const { name, slug, image, id } = req.body

    if (!name || !slug || !image) throw new ApiError(401, "All field are required");


    let category = await categoryModel.findOne({ name });

    if (!category) {
        category = await createCatgoryDao(name, slug, image, id)

    }





    return res.status(201).json({
        message: "category create successfull",
        category: category
    })

});

export const getCategoryController = asyncHandler(async (req, res) => {
    const category = await getCategoryDao();

    return res.status(200).json({
        message: "categroy fecth",
        category
    })
});

export const deleteContorller = asyncHandler(async (req, res) => {

    const { id } = req.params;

    if (!id) throw new ApiError(404, "Category Id not Found");

    const category = await getCategoryById(id);

    if (!category) throw new ApiError(404, "category not found")

    return res.status(200).json({
        message: "Category Delete SuccessFUll",
        name: category.name
    })

});

export const editCategoryController = asyncHandler(async (req, res) => {

    const { id } = req.params;


    const updatecategory = await updateCategory(req.body, id);


    return res.status(200).json({
        message: "update",
        data: updatecategory
    })


})