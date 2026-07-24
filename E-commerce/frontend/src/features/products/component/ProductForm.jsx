import React from 'react'
import { useProductHook } from '../hook/productHook';

function ProductForm() {


    const { useCreateProductHook } = useProductHook();
    const { register, handleSubmit, useSubmitCreateProduct, category } = useCreateProductHook();

    return (

        <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-6 h-fit">

            <div>
                <h1 className="text-2xl font-semibold text-white mb-6">
                    Create Product
                </h1>

                <form onSubmit={handleSubmit(useSubmitCreateProduct)} className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    {/* Title */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-300">
                            Product Title
                        </label>

                        <input
                            {...register("title", {
                                required: "title is required"
                            })}
                            type="text"
                            placeholder="Enter title"
                            className="w-full bg-[#1F2937] border border-[#374151] rounded-xl px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-green-500 transition"
                        />
                    </div>

                    {/* Brand */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-300">
                            Brand
                        </label>

                        <input
                            {...register("brand", {
                                required: "title is required"
                            })}
                            type="text"
                            placeholder="Apple"
                            className="w-full bg-[#1F2937] border border-[#374151] rounded-xl px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-green-500 transition"
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-300">
                            Price
                        </label>

                        <input
                            {...register("price", {
                                required: "price is required",

                            }, { valueAsNumber: true })}
                            type="number"
                            placeholder="999"
                            className="w-full bg-[#1F2937] border border-[#374151] rounded-xl px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-green-500 transition"
                        />
                    </div>

                    {/* Stock */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-300">
                            Stock
                        </label>

                        <input
                            {...register("stock", {
                                required: "stock is required"
                            }, { valueAsNumber: true })}
                            type="number"
                            placeholder="50"
                            className="w-full bg-[#1F2937] border border-[#374151] rounded-xl px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-green-500 transition"
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-300">
                            Category
                        </label>

                        <select
                            {...register("category", {
                                required: "Category is required"
                            })}
                            className="w-full bg-[#1F2937] border border-[#374151] rounded-xl px-4 py-3 text-gray-300 outline-none focus:border-green-500">

                            <option>Select Category</option>




                            {
                                category.map((item) => (
                                    <option value={item.name}>
                                        {item.name}
                                    </option>
                                ))
                            }

                        </select>
                    </div>

                    {/* Rating */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-300">
                            Rating
                        </label>

                        <input
                            {...register("rating", {
                                required: "rating is required"
                            }, { valueAsNumber: true })}
                            type="number"
                            step="0.1"
                            min="0"
                            max="5"
                            placeholder="4.5"
                            className="w-full bg-[#1F2937] border border-[#374151] rounded-xl px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-green-500 transition"
                        />
                    </div>

                    {/* Total Reviews */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-300">
                            Total Reviews
                        </label>

                        <input
                            {...register("totalReviews", {
                                required: "totalReviews is required",
                                valueAsNumber: true
                            })}
                            type="number"
                            placeholder="100"
                            className="w-full bg-[#1F2937] border border-[#374151] rounded-xl px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-green-500 transition"
                        />
                    </div>

                    {/* Multiple Images */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-300">
                            Product Images
                        </label>

                        <input
                            {...register("images", {
                                required: "images is required"
                            })}
                            type="text"
                            multiple
                            className="w-full bg-[#1F2937] border border-[#374151] rounded-xl px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-green-500 transition"
                        />
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">

                        <label className="block mb-2 text-sm font-medium text-gray-300">
                            Description
                        </label>

                        <textarea
                            {...register("description", {
                                required: "description is required"
                            })}
                            rows="5"
                            placeholder="Write description..."
                            className="w-full bg-[#1F2937] border border-[#374151] rounded-xl px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-green-500"
                        ></textarea>

                    </div>

                    {/* Featured */}

                    <div className="flex items-center gap-2 mt-2">

                        <input
                            {...register("isFeatured", {
                                required: "isFeatured is required"
                            })}
                            type="checkbox"
                        />

                        <label className="text-gray-300">
                            Featured Product
                        </label>

                    </div>

                    {/* Active */}

                    <div className="flex items-center gap-3">

                        <input
                            {...register("isActive", {
                                required: "isActive is required"
                            })}
                            type="checkbox"
                        />

                        <label>
                            Active Product
                        </label>

                    </div>

                    {/* Button */}

                    <div className="md:col-span-2">
                        <button
                            className="w-full bg-green-600 hover:bg-green-700 transition rounded-xl py-3 font-semibold text-white"
                        >
                            Create Product
                        </button>

                    </div>

                </form>

            </div>

        </div>
    )
}

export default ProductForm
