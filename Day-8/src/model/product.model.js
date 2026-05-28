const mongoose = require('mongoose');

const productSchema = mongoose.Schema({

    productName: {
        type: String,
        required: true
    },
    ProductImage: {
        type: String,
        required: true,
    },
    ProductDetails: {

        discription: {
            type: String,
            required: true,
        },
        amount: {
            price: {
                type: Number,
                required: true
            },
            currency: {
                type: String,
                enum: ["INR", "USD"]
            }


        }
    },
    category: {
        type: String,
        enum: ["MEN", "WOMEN", "KID"]
    },
})

const productModel = mongoose.model("products", productSchema)

module.exports = productModel