import React from "react";
import { useProductApi } from "../productApi/productApi";

function DeleteProduct({


    setDeleteProduct
}) {

    const { deleteProductApi } = useProductApi()

    const handleDelete = () => {
        deleteProductApi();

    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="w-[90%] max-w-md rounded-xl bg-white p-6 shadow-2xl">
                <div className="flex flex-col items-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                        <span className="text-3xl">🗑️</span>
                    </div>

                    <h2 className="text-2xl font-bold">Delete Product</h2>

                    <p className="mt-3 text-center text-gray-600">
                        Are you sure you want to delete
                    </p>

                    <p className="mt-2 font-semibold text-red-600">

                    </p>

                    <p className="mt-3 text-center text-sm text-gray-500">
                        This action cannot be undone.
                    </p>

                    <div className="mt-8 flex w-full gap-4">
                        <button

                            className="flex-1 rounded-lg border border-gray-300 py-3 font-semibold hover:bg-gray-100"
                        >
                            Cancel
                        </button>

                        <button
                            onClick={() => { handleDelete(); setDeleteProduct((prev) => !prev) }}

                            className="flex-1 rounded-lg bg-red-600 py-3 font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-red-400"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteProduct;