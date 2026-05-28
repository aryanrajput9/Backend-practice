const mongoose = require('mongoose');


const productSchema = mongoose.Schema({

    productName: {
        type: String,
        required: true
    },
    price: {
        amount: Number,
        currency: {
            type: String,
            enum: ["INR", "USD"],
            required: true
        },
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },

}, {
    timestamps: true
})

let productModel = mongoose.model("product", productSchema);
module.exports = productModel