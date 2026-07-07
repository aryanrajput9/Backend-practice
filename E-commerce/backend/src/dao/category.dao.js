import categoryModel from "../model/category.model.js";



export const createCatgoryDao = async (name, slug, image) => {

    const category = await categoryModel.create({
        name, slug, image,
        createdBy: "6a4c7ba8aaf1b4af9af30b90"
    });

    return category
}