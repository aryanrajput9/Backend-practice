import { Trash2, X } from "lucide-react";
import { useCategoryHook } from "../hook/productHook";


function DeleteCategory({ setDeletePoPup, categoryId }) {


    const { deletecategory } = useCategoryHook();

    const handleDelte = async () => {
        deletecategory(categoryId);

    }


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="relative w-[420px] rounded-2xl border border-gray-700 bg-[#1F2937] p-8 shadow-2xl">

                {/* Close */}
                <button onClick={() => setDeletePoPup(false)} className="absolute right-5 top-5 text-gray-400 transition hover:text-white">
                    <X size={22} />
                </button>

                {/* Icon */}
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-500/15">
                    <Trash2 size={40} className="text-red-500" />
                </div>

                {/* Title */}
                <h2 className="mt-6 text-center text-2xl font-bold text-white">
                    Delete Category
                </h2>

                {/* Description */}
                <p className="mt-3 text-center text-gray-400 leading-6">
                    Are you sure you want to delete this category?
                    <br />
                    This action cannot be undone.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex gap-4">
                    <button className="flex-1 rounded-lg border border-gray-600 py-3 font-medium text-gray-300 transition hover:bg-gray-700">
                        Cancel
                    </button>

                    <button onClick={() => {
                        handleDelte();

                        setDeletePoPup(false)

                            ;
                    }} className="flex-1 rounded-lg bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeleteCategory