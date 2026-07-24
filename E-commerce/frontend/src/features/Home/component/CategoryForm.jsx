import React from "react";
import { ImagePlus } from "lucide-react";
import { useCategoryHook } from "../hook/categoryHook";

function CategoryForm() {

    const { useCreateCategoryHook } = useCategoryHook();

    const { register, handleSubmit, errors, useSubmitOfCategory } = useCreateCategoryHook()

    return (
        <div className="p-6 text-white">

            {/* Heading */}
            <div className="mb-6">
                <h2 className="text-2xl font-semibold">
                    Add New Category
                </h2>

                <p className="text-sm text-gray-400 mt-1">
                    Create a new product category
                </p>
            </div>

            <form onSubmit={handleSubmit(useSubmitOfCategory)}>

                <div className="space-y-5">

                    {/* Category Name */}
                    <div>
                        <label className="block mb-2 text-sm text-gray-300">
                            Category Name
                        </label>

                        <input
                            {...register("name", {
                                required: "Category name is required",
                                minLength: {
                                    value: 3,
                                    message: "Category name must be at least 3 characters",
                                },
                                maxLength: {
                                    value: 50,
                                    message: "Category name cannot exceed 50 characters",
                                },
                            })}
                            type="text"
                            placeholder="Enter category name"
                            className="w-full bg-[#23262F] border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-green-500"
                        />
                    </div>

                    {errors.name && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.name.message}
                        </p>
                    )}

                    {/* Slug */}
                    <div>
                        <label className="block mb-2 text-sm text-gray-300">
                            Slug
                        </label>

                        <input
                            {...register("slug", {
                                required: "Category slug is required",
                                pattern: {
                                    value: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
                                    message:
                                        "Slug must contain only lowercase letters, numbers, and hyphens (e.g. electronics-accessories)",
                                },
                            })}
                            type="text"
                            placeholder="category-slug"
                            className="w-full bg-[#23262F] border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-green-500"
                        />
                    </div>
                    {errors.slug && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.slug.message}
                        </p>
                    )}

                    {/* Description */}
                    <div>
                        <label className="block mb-2 text-sm text-gray-300">
                            Description
                        </label>

                        <textarea
                            {...register("description", {
                                required: "Category description is required",
                                minLength: {
                                    value: 10,
                                    message: "Description must be at least 10 characters",
                                },
                                maxLength: {
                                    value: 500,
                                    message: "Description cannot exceed 500 characters",
                                },
                            })}
                            rows={5}
                            placeholder="Write category description..."
                            className="w-full bg-[#23262F] border border-gray-700 rounded-lg px-4 py-3 resize-none outline-none focus:border-green-500"
                        />
                    </div>
                    {errors.description && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.description.message}
                        </p>
                    )}
                    {/* Upload */}
                    <div>
                        <label className="block mb-2 text-sm text-gray-300">
                            Category Image
                        </label>

                        <div className="border-2 border-dashed border-gray-700 rounded-xl h-44 flex flex-col justify-center items-center hover:border-green-500 transition cursor-pointer">

                            <ImagePlus className="text-gray-500" size={40} />

                            <p className="mt-3 text-sm">
                                Upload Image
                            </p>

                            <p className="text-xs text-gray-500">
                                PNG, JPG, WEBP
                            </p>

                            <input
                                {...register("image", {
                                    required: "Category image is required",

                                })}
                                type="text"
                                placeholder="https://example.com/image.jpg" />

                        </div>
                    </div>
                    {errors.image && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.image.message}
                        </p>
                    )}
                    {/* Status */}
                    <div>
                        <label className="block mb-3 text-sm text-gray-300">
                            Status
                        </label>

                        <div className="flex gap-8">

                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    value="true"
                                    {...register("isActive", {
                                        required: "Please select category status",
                                    })}
                                />
                                Active
                            </label>

                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    value="false"
                                    {...register("isActive", {
                                        required: "Please select category status",
                                    })}
                                />
                                Inactive
                            </label>

                        </div>

                        {errors.isActive && (
                            <p className="mt-2 text-sm text-red-500">
                                {errors.isActive.message}
                            </p>
                        )}
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 pt-4">

                        <button className="px-5 py-2 rounded-lg border border-gray-700 hover:bg-gray-800">
                            Cancel
                        </button>

                        <button className="px-5 py-2 rounded-lg bg-green-600 hover:bg-green-700">
                            Create Category
                        </button>

                    </div>

                </div>
            </form>

        </div>
    );
}

export default CategoryForm;