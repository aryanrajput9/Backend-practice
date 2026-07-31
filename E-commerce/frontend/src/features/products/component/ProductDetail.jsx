import React, { useContext, useEffect } from "react";
import { Star } from "lucide-react";
import { productsContext } from "../../../context/productContext";
import { useParams } from "react-router";
import { useProductApi } from "../../Home/services/prodcutApi";
import Comment from "./Comment";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useCommentApi } from "../productApi/productApi";

function ProductDetail() {

    const { productdetails, setProductDetails, setAddCart, fetchComment } = useContext(productsContext);
    const { getProductById } = useProductApi()
    const { id } = useParams();

    const { userId, username } = useSelector((state) => state.auth.user);


    const fetchProductById = async () => {


        const product = await getProductById(id);

        fetchComment(id)
        setProductDetails(product.data.product)


    };

    const { register, reset, handleSubmit } = useForm();



    const onSubmit = async (data) => {
        const newData = { id, userId, name: username, ...data };
        const comment = await useCommentApi.createCommentApi(newData);
        const allcomment = await fetchComment(id)


        reset();

        return { comment, allcomment }
    }

    useEffect(() => {
        fetchProductById()
    }, [id])

    return (
        <div className="min-h-screen bg-gray-100 py-10">

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 bg-white rounded-2xl shadow-xl p-8">

                {/* Product Image */}
                <div className="bg-gray-50 rounded-2xl flex items-center justify-center p-8">
                    <img
                        src={productdetails.images}
                        alt={productdetails.title}
                        className="max-h-[500px] object-contain hover:scale-105 transition duration-300"
                    />
                </div>

                {/* Product Details */}
                <div className="flex flex-col">

                    <p className="uppercase text-sm tracking-widest text-gray-500">
                        {productdetails.brand}
                    </p>

                    <h1 className="text-4xl font-bold mt-2 leading-tight">
                        {productdetails.title}
                    </h1>

                    {/* Rating */}
                    <div className="flex items-center gap-3 mt-5">

                        <div className="flex items-center gap-1 bg-green-600 text-white px-3 py-1 rounded-md">
                            <span>{productdetails.rating}</span>

                            <Star
                                size={15}
                                className="fill-white text-white"
                            />
                        </div>

                        <span className="text-gray-600">
                            {productdetails.totalReviews} Ratings & Reviews
                        </span>

                    </div>

                    {/* Price */}
                    <div className="mt-8">

                        <h2 className="text-4xl font-bold text-green-600">
                            ₹{productdetails.price}
                        </h2>

                        <p className="text-sm text-gray-500 mt-1">
                            Inclusive of all taxes
                        </p>

                    </div>

                    {/* Stock */}
                    <div className="mt-6">

                        <span className="font-semibold">
                            Availability :
                        </span>

                        <span className="ml-2 text-green-600 font-semibold">
                            In Stock ({productdetails.stock})
                        </span>

                    </div>

                    {/* Description */}
                    <div className="mt-8">

                        <h3 className="font-bold text-xl mb-3">
                            Product Description
                        </h3>

                        <p className="text-gray-600 leading-8">
                            {productdetails.description}
                        </p>

                    </div>

                    {/* Buttons */}
                    <div className="flex gap-5 mt-10">

                        <button
                            onClick={() =>
                                setAddCart((prev) => {
                                    let exists = prev.find((elem) => elem._id === productdetails._id);

                                    if (exists) {
                                        return prev.map(item => item._id === productdetails._id ? {
                                            ...item,
                                            quantity: item.quantity + 1


                                        } : item
                                        )
                                    };

                                    return [...prev, { ...productdetails, quantity: 1 }]
                                })
                            }
                            className="flex-1 bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-900 transition"
                        >
                            Add To Cart
                        </button>

                        <button
                            className="flex-1 bg-green-600 text-white py-4 rounded-xl font-semibold hover:bg-green-700 transition"
                        >
                            Buy Now
                        </button>

                    </div>

                </div>

            </div>

            {/* Reviews */}
            <div className="max-w-7xl mx-auto mt-10 grid lg:grid-cols-3 gap-8">

                {/* Customer Reviews */}
                <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8">

                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold">
                            Customer Reviews
                        </h2>

                        <span className="text-gray-500">
                            {productdetails.totalReviews} Reviews
                        </span>
                    </div>

                    <Comment />

                </div>

                {/* Write Review */}
                <div className="bg-white rounded-2xl shadow-lg p-8 h-fit sticky top-6">

                    <h2 className="text-2xl font-bold mb-6">
                        Write a Review
                    </h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">



                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Rating
                            </label>

                            <select {...register("rating")} className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500">
                                <option>Select Rating</option>
                                <option>⭐⭐⭐⭐⭐ (5)</option>
                                <option>⭐⭐⭐⭐ (4)</option>
                                <option>⭐⭐⭐ (3)</option>
                                <option>⭐⭐ (2)</option>
                                <option>⭐ (1)</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Review
                            </label>

                            <textarea
                                {...register("comment")}
                                rows="5"
                                placeholder="Tell us what you liked or disliked..."
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition"
                        >
                            Submit Review
                        </button>

                    </form>

                </div>

            </div>

        </div >
    );
}

export default ProductDetail;