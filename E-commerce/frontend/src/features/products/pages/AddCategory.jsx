import React, { useContext, useState } from "react";
import CategoryForm from "../../Home/component/CategoryForm";
import AllCategory from "../../Home/component/AllCategory";
import EditCategoryForm from "../component/EditCategoryForm";
import { productsContext } from "../../../context/productContext";
import { useCategoryHook } from "../hook/productHook";
import DeleteCategory from "../component/DeleteCategory";

function AddCategory() {
    const [open, setOpen] = useState(false)
    const { category } = useContext(productsContext)
    const [categoryId, setCategoryId] = useState("");
    const [deletePopup, setDeletePoPup] = useState(false)

    const { updateCategory } = useCategoryHook(categoryId);


    return (

        <div className="bg-[#111315] min-h-screen p-6">

            {/* Stats */}
            <div className="grid grid-cols-4 gap-5 mb-6">

                <div className="h-28 rounded-xl bg-[#1A1D24] border border-gray-800 flex items-center justify-center text-white">
                    TotalCategoryCard =<p className="text-2xlx">{category.length}</p>
                </div>

                <div className="h-28 rounded-xl bg-[#1A1D24] border border-gray-800 flex items-center justify-center text-white">
                    ActiveCategoryCard
                </div>

                <div className="h-28 rounded-xl bg-[#1A1D24] border border-gray-800 flex items-center justify-center text-white">
                    TotalProductCard
                </div>

                <div className="h-28 rounded-xl bg-[#1A1D24] border border-gray-800 flex items-center justify-center text-white">
                    TotalViewsCard
                </div>

            </div>

            {/* Main Layout */}
            <div className="grid grid-cols-12 gap-5">

                {/* Left */}
                <div className="col-span-8 rounded-xl bg-[#1A1D24] border border-gray-800 overflow-hidden">
                    <AllCategory setOpen={setOpen} setCategoryId={setCategoryId} setDeletePoPup={setDeletePoPup} />
                </div>

                {/* Right */}
                <div className="col-span-4 sticky top-5">
                    <div className="rounded-xl bg-[#1A1D24] border border-gray-800 p-5">
                        <CategoryForm />
                    </div>
                </div>

                <div className="absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%]">
                    {open === false ? " " : <EditCategoryForm setOpen={setOpen} category={category} updateCategory={updateCategory} categoryId={categoryId} />}

                </div>

                <div className="absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] w-full">{deletePopup === false ? " " : <DeleteCategory setDeletePoPup={setDeletePoPup} categoryId={categoryId} />}</div>

            </div>

        </div>
    );
}

export default AddCategory;