import React, { useContext } from 'react'
import { Search, Pencil, Trash2, ChevronDown } from "lucide-react";
import { productsContext } from '../../../context/productContext';


function AllProducts() {


    const { productsData, category } = useContext(productsContext)



    return (


        <div className="bg-[#111827]  rounded-2xl border border-gray-800 p-6">

            <h2 className="text-2xl font-semibold text-white mb-6">
                All Products
            </h2>

            {/* Search */}

            <div className="flex flex-wrap gap-4 mb-6">

                <div className="relative flex-1 min-w-[280px]">

                    <Search
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    />

                    <input
                        placeholder="Search product by name..."
                        className="w-full bg-[#1F2937] border border-gray-700 rounded-lg py-3 pl-11 pr-4 text-white outline-none focus:border-green-500"
                    />

                </div>

                <select className="bg-[#1F2937] border border-gray-700 rounded-lg px-4 text-gray-300">
                    <option>All Categories</option>
                    {category.map((elem) => <option>{elem.name}</option>)}
                </select>

                <select className="bg-[#1F2937] border border-gray-700 rounded-lg px-4 text-gray-300">
                    <option>All Status</option>
                </select>

                <button className="flex items-center gap-2 bg-[#1F2937] border border-gray-700 rounded-lg px-4 text-gray-300">
                    Sort : Latest
                    <ChevronDown size={16} />
                </button>

            </div>

            {/* Table */}

            <div className="overflow-x-auto">

                <table className="w-full">

                    <thead>

                        <tr className="text-left border-b border-gray-800 text-gray-400">

                            <th className="py-4">Product</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Status</th>
                            <th className="text-center">Action</th>

                        </tr>

                    </thead>

                    <tbody>

                        {productsData.map((item) => (

                            <tr
                                key={item.id}
                                className="border-b border-gray-800 hover:bg-[#1B2431] transition"
                            >

                                <td className="py-5">

                                    <div className="flex items-center gap-4">

                                        <img
                                            src={item.images[0]}
                                            alt=""
                                            className="w-14 h-14 rounded-lg object-cover"
                                        />

                                        <div>

                                            <h3 className="text-white font-medium">
                                                {item.title}
                                            </h3>

                                            <p className="text-sm text-gray-400">
                                                {item.brand}
                                            </p>

                                        </div>

                                    </div>

                                </td>

                                <td className="text-gray-300">
                                    {item.category}
                                </td>

                                <td className="text-white font-medium">
                                    {item.price}
                                </td>

                                <td className="text-gray-300">
                                    {item.stock}
                                </td>

                                <td>

                                    <div className="space-y-2">

                                        {item.isFeatured && (

                                            <span className="inline-block bg-yellow-500/20 text-yellow-400 text-xs px-3 py-1 rounded-md">
                                                Featured
                                            </span>

                                        )}

                                        {item.isActive && (

                                            <span className="block w-fit bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-md">
                                                Active
                                            </span>

                                        )}

                                    </div>

                                </td>

                                <td>

                                    <div className="flex justify-center gap-3">

                                        <button className="w-10 h-10 rounded-lg border border-gray-700 flex items-center justify-center hover:bg-blue-500 transition">

                                            <Pencil size={18} />

                                        </button>

                                        <button className="w-10 h-10 rounded-lg border border-gray-700 flex items-center justify-center hover:bg-red-500 transition">

                                            <Trash2
                                                size={18}
                                                className="text-red-500"
                                            />

                                        </button>

                                    </div>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    )

}

export default AllProducts
