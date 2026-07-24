import categoryModel from "../model/category.model.js";



export const createCatgoryDao = async (name, slug, image, id) => {

    const category = await categoryModel.create({
        name, slug, image,
        createdBy: id
    });

    return category
}


export const getCategoryDao = async () => {

    const category = await categoryModel.find();

    return category
};

export const getCategoryById = async (id) => {
    const category = await categoryModel.findByIdAndDelete(id);

    return category
};

export const updateCategory = async (data, id) => {


    const category = await categoryModel.findOneAndUpdate(
        { _id: id, },
        data,
        {
            returnDocument: 'after'

        }
    )

    return category

}