import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        ref: "category",
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    images: [
        {
            type: String
        }
    ],
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    },
    totalReviews: {

        type: String,
        required: true
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "admin",
        required: true
    }

}, {
    timestamps: true
});


const productModel = mongoose.model("products", productSchema);

export default productModel



// POST / products          // Add Product (Admin)
// GET / products          // Get All Products
// GET / products /: id      // Get Single Product
// PATCH / products /: id      // Update Product
// DELETE / products /: id      // Delete Product