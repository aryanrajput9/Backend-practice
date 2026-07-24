import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { X } from "lucide-react";

export default function EditCategoryForm({
    category,
    updateCategory,
    categoryId,
    setOpen,
}) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();



    useEffect(() => {

        category.map((elem) => {
            if (elem._id === categoryId) {
                reset({
                    name: elem.name,
                    slug: elem.slug,
                    image: elem.image,
                    isActive: elem.isActive,
                });
            }
        })

    }, [categoryId, reset]);

    return (
        <form
            onSubmit={handleSubmit(updateCategory)}
            className="relative space-y-5 max-w-lg mx-auto bg-white p-6 rounded-xl shadow-lg"
        >
            {/* Close Button */}
            <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 rounded-full p-2 hover:bg-gray-100 transition"
            >
                <X size={22} />
            </button>

            <h2 className="text-2xl font-bold">
                Edit Category
            </h2>

            {/* Name */}
            <div>
                <label className="block mb-1 font-medium">
                    Name
                </label>

                <input
                    type="text"
                    {...register("name", {
                        required: "Category name is required",
                    })}
                    className="w-full rounded border p-2"
                />

                {errors.name && (
                    <p className="mt-1 text-sm text-red-500">
                        {errors.name.message}
                    </p>
                )}
            </div>

            {/* Slug */}
            <div>
                <label className="block mb-1 font-medium">
                    Slug
                </label>

                <input
                    type="text"
                    {...register("slug", {
                        required: "Slug is required",
                    })}
                    className="w-full rounded border p-2"
                />

                {errors.slug && (
                    <p className="mt-1 text-sm text-red-500">
                        {errors.slug.message}
                    </p>
                )}
            </div>

            {/* Image */}
            <div>
                <label className="block mb-1 font-medium">
                    Image URL
                </label>

                <input
                    type="text"
                    {...register("image")}
                    className="w-full rounded border p-2"
                />
            </div>

            {/* Image Preview */}
            {category?.image && (
                <img
                    src={category.image}
                    alt="Category"
                    className="h-32 w-32 rounded object-cover"
                />
            )}

            {/* Active */}
            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    {...register("isActive")}
                />

                <label>Active</label>
            </div>

            <button
                type="submit"
                className="w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700"
            >
                Update Category
            </button>
        </form>
    );
}