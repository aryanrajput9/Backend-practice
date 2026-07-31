import { createProductDao, deleteProductDao, getProductByCraeterDoa, getProductDao, updateProductDao } from "../dao/product.dao.js";
import ApiError from "../utils/apiresponse.js";
import asyncHandler from "../utils/asyncHandler.js";

export const createProductController = asyncHandler(async (req, res) => {


    const {
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
        id
    } = req.body;

    const createdBy = id

    if (
        !title ||
        !description ||
        price == null ||
        stock == null ||
        !brand ||
        !images ||
        rating == null ||
        totalReviews == null ||
        isFeatured == null
    ) {
        throw new ApiError(400, "All fields are required rp");
    }

    const product = await createProductDao(
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

    );

    return res.status(201).json({
        message: "Product created successfully",
        data: product
    });

});

export const getProductController = asyncHandler(async (req, res) => {

    const product = await getProductDao();

    return res.status(200).json({
        message: "all product fetch",
        products: product
    })
})

export const updateProductController = asyncHandler(async (req, res) => {

    const { productId } = req.params;


    const updateProduct = await updateProductDao(productId, req.body);

    return res.status(200).json({
        message: "update successfull",
        data: updateProduct
    })
})

export const deleteProdcutCOntroller = asyncHandler(async (req, res) => {

    console.log(req.params)

    const { productId } = req.params;


    const deleteProduct = await deleteProductDao(productId)

    return res.status(200).json({
        message: "product delete successfull",
        data: deleteProduct
    })
})

export const getProductByCraeterController = asyncHandler(async (req, res) => {

    const { userId } = req.body;

    if (!userId) throw new ApiError(404, "Id not found");

    const product = await getProductByCraeterDoa(userId);

    return res.status(200).json({
        message: "Data fetched",
        data: product
    })


})