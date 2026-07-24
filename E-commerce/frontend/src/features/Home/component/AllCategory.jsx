import React, { useContext } from "react";
import { Pencil, Trash2, Search } from "lucide-react";
import { productsContext } from "../../../context/productContext";
import Loader from "../../products/component/Loader";

function AllCategory({ setOpen, setCategoryId, setDeletePoPup, load }) {





    const { category, fetchCategories } = useContext(productsContext)

    if (load) {
        fetchCategories()
        return <Loader />
    }

    return (
        <div className="p-6 relative">

            {/* Header */}
            <div className="flex justify-between items-center mb-6 ">

                <h1 className="text-3xl font-bold">
                    All Categories
                </h1>

                <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700">
                    + Add Category
                </button>

            </div>

            {/* Search */}
            <div className="relative mb-6 w-80">

                <Search
                    size={18}
                    className="absolute left-3 top-3 text-gray-400"
                />
                <input
                    type="text"
                    placeholder="Search category..."
                    className="w-full bg-[#23262F] border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder:text-gray-500 outline-none focus:border-green-500"
                />

            </div>

            {/* Table */}
            <div className="rounded-xl border border-gray-800 overflow-hidden ">

                <table className="w-full text-gray-300">

                    <thead className="bg-[#23262F]">

                        <tr>

                            <th className="text-left p-4">#</th>

                            <th className="text-left p-4">
                                Category
                            </th>

                            <th className="text-left p-4">
                                Products
                            </th>

                            <th className="text-left p-4">
                                Status
                            </th>

                            <th className="text-left p-4">
                                Created
                            </th>

                            <th className="text-center p-4">
                                Actions
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {


                            category?.map((item, index) => (

                                <tr
                                    key={item._id}
                                    className="border-b border-gray-800 hover:bg-[#23262F] transition"
                                >

                                    <td className="p-4">
                                        {index + 1}
                                    </td>

                                    <td className="p-4 font-medium">
                                        {item.name}
                                    </td>

                                    <td className="p-4">
                                        {item.totalProducts}
                                    </td>

                                    <td className="p-4">

                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-medium ${item.isActive
                                                ? "bg-green-600/20 text-green-400"
                                                : "bg-red-600/20 text-red-400"
                                                }`}
                                        >
                                            {item.isActive ? "Active" : "Inactive"}
                                        </span>

                                    </td>

                                    <td className="p-4">
                                        {item.createdAt}
                                    </td>

                                    <td className="p-4">

                                        <div className="flex justify-center gap-3">

                                            <button onClick={() => {
                                                setOpen(true); setCategoryId(item._id)
                                            }} className="p-2 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30">
                                                <Pencil size={18} />
                                            </button>


                                            <button onClick={() => {
                                                setDeletePoPup(true);
                                                setCategoryId(item._id)
                                            }} className="p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30">
                                                <Trash2 size={18} />
                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))
                        }

                    </tbody>

                </table>

            </div>

        </div >
    );
}

export default AllCategory;