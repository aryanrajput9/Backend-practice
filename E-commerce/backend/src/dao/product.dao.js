import productModel from "../model/product.model.js";

export const createProductDao = async (
    title,
    description,
    price,
    category,
    stock,
    brand,
    images,
    rating,
    totalReviews,
    isFeatured,
    isActive,
    createdBy
) => {
    return await productModel.create({
        title,
        description,
        price,
        category,
        stock,
        brand,
        images,
        rating,
        totalReviews,
        isFeatured,
        isActive,
        createdBy
    });
};

export const getProductDao = async () => {

    const product = await productModel.find()
    return product

}

export const updateProductDao = async (productId, data) => {

    const updateProduct = await productModel.findByIdAndUpdate(
        productId,
        data,
        {
            new: true,

        },
    );

    return updateProduct
}


export const deleteProductDao = async (productId) => {

    const deleteProduct = await productModel.findByIdAndDelete(
        productId
    );

    return deleteProduct
}

export const getProductByCraeterDoa = async (userId) => {

    const product = await productModel.findById(userId);

    return product
}