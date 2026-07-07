import productModel from "../model/product.model.js";


export const createProductDao = async (title, description, price,
    discountPrice, stock, category,
    brand, images, rating, totalReviews,
    isFeatured, isActive) => {
    const product = await productModel.create({
        title,
        description,
        price,
        discountPrice,
        stock,
        category,
        brand,
        images,
        rating,
        totalReviews,
        isFeatured,
        createdBy: "6a4c7ba8aaf1b4af9af30b90"

    });

    return product
};

export const getProductDao = async () => {

    const product = await productModel.find().populate("category")
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