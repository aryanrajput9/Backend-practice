const productModel = require('../model/product.model');



const postProduct = async (req, res) => {

    try {

        const { name, image, disc, price, currency, category } = req.body;

        const newProduct = await productModel.create({

            productName: name,

            ProductImage: image,

            ProductDetails: {

                discription: disc,

                amount: {
                    price: price,
                    currency: currency
                }
            },

            category: category
        })

        res.status(201).json({
            message: "product created",
            product: newProduct
        })

    } catch (error) {

        console.log("error in create api", error)

        res.status(500).json({
            message: "server error"
        })
    }

}
const getProduct = async (req, res) => {

    try {
        const products = await productModel.find()
        res.status(200).json({
            message: "product fecthed",
            products
        })
    } catch (error) {
        console.log("error in api", error)
    }

}

module.exports = {
    postProduct,
    getProduct,
}