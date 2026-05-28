import React from 'react'
import {
    Pencil,
    Trash2,
    LayoutGrid,
    ListFilter,
    ChevronDown,
    ChevronLeft,
    ChevronRight
} from 'lucide-react'

function ProductTable() {

    const products = [
        {
            id: 1,
            name: "Nexus Sound Pro 2",
            sku: "NX-4829-BK",
            category: "Electronics",
            stock: "In Stock (124)",
            price: "$299.00",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
        },
        {
            id: 2,
            name: "Aura Chrono Series 5",
            sku: "AU-9910-SL",
            category: "Wearables",
            stock: "Out of Stock",
            price: "$449.00",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
        },
        {
            id: 3,
            name: "Vertex UltraBook M3",
            sku: "VX-1024-GY",
            category: "Computing",
            stock: "In Stock (12)",
            price: "$1,899.00",
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
        },
        {
            id: 4,
            name: "Nova Frame X1",
            sku: "NV-5520-BK",
            category: "Photography",
            stock: "In Stock (45)",
            price: "$1,250.00",
            image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
        }
    ]

    return (
        <div className='w-full bg-[#05060A] text-white p-6'>

            {/* Top Controls */}
            <div className='flex items-center justify-between mb-8'>

                <div className='flex items-center gap-4'>

                    {/* Category */}
                    <button className='flex items-center gap-3 bg-[#0D1117] border border-white/5 px-5 py-3 rounded-xl text-sm text-gray-200 hover:border-[#8B5CF6] transition'>

                        <ListFilter size={16} />

                        <span>All Categories</span>

                        <ChevronDown size={16} />

                    </button>

                    {/* Sort */}
                    <button className='flex items-center gap-3 bg-[#0D1117] border border-white/5 px-5 py-3 rounded-xl text-sm text-gray-200 hover:border-[#8B5CF6] transition'>

                        <ListFilter size={16} />

                        <span>Latest First</span>

                        <ChevronDown size={16} />

                    </button>

                </div>

                {/* Right */}
                <div className='flex items-center gap-4'>

                    <h2 className='text-sm font-semibold tracking-wide text-[#C4B5FD] uppercase'>
                        482 Total Products
                    </h2>

                    <button className='w-11 h-11 rounded-xl bg-[#11131A] flex items-center justify-center text-gray-300 hover:bg-[#8B5CF6] hover:text-white transition'>
                        <LayoutGrid size={18} />
                    </button>

                    <button className='w-11 h-11 rounded-xl bg-[#1B1630] flex items-center justify-center text-[#C4B5FD]'>
                        <ListFilter size={18} />
                    </button>

                </div>

            </div>

            {/* Table Header */}
            <div className='grid grid-cols-[2fr_1fr_1fr_1fr_120px] text-xs font-semibold uppercase text-gray-400 px-5 mb-4'>

                <h3>Product Info</h3>
                <h3>Category</h3>
                <h3>Stock Status</h3>
                <h3>Price</h3>
                <h3 className='text-center'>Actions</h3>

            </div>

            {/* Products */}
            <div className='flex flex-col gap-4'>

                {
                    products.map((item) => (

                        <div
                            key={item.id}
                            className='grid grid-cols-[2fr_1fr_1fr_1fr_120px] items-center bg-[#0B0D12] border border-white/5 rounded-2xl px-5 py-5 hover:border-[#8B5CF6]/40 transition'
                        >

                            {/* Product Info */}
                            <div className='flex items-center gap-4'>

                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className='w-16 h-16 rounded-xl object-cover'
                                />

                                <div>
                                    <h2 className='font-semibold text-white'>
                                        {item.name}
                                    </h2>

                                    <p className='text-sm text-gray-400 mt-1'>
                                        SKU: {item.sku}
                                    </p>
                                </div>

                            </div>

                            {/* Category */}
                            <p className='text-gray-300 font-medium'>
                                {item.category}
                            </p>

                            {/* Stock */}
                            <div>

                                <span
                                    className={`px-3 py-1 rounded-full text-xs font-medium border

                                    ${item.stock.includes("Out")
                                            ? "bg-red-500/10 text-red-300 border-red-500/20"
                                            : "bg-emerald-500/10 text-emerald-300 border-emerald-500/20"
                                        }
                                    `}
                                >
                                    {item.stock}
                                </span>

                            </div>

                            {/* Price */}
                            <h3 className='text-[#E9D5FF] font-semibold text-lg'>
                                {item.price}
                            </h3>

                            {/* Actions */}
                            <div className='flex items-center justify-center gap-4'>

                                <button className='text-gray-300 hover:text-[#8B5CF6] transition'>
                                    <Pencil size={18} />
                                </button>

                                <button className='text-gray-300 hover:text-red-400 transition'>
                                    <Trash2 size={18} />
                                </button>

                            </div>

                        </div>

                    ))
                }

            </div>

            {/* Footer */}
            <div className='flex items-center justify-between mt-8'>

                <p className='text-sm text-gray-400'>
                    Showing 1 to 4 of 482 products
                </p>

                {/* Pagination */}
                <div className='flex items-center gap-2'>

                    <button className='w-10 h-10 rounded-lg bg-[#0D1117] flex items-center justify-center text-gray-400 hover:bg-[#151A22] transition'>
                        <ChevronLeft size={18} />
                    </button>

                    <button className='w-10 h-10 rounded-lg bg-[#8B5CF6] text-white font-semibold'>
                        1
                    </button>

                    <button className='w-10 h-10 rounded-lg bg-[#0D1117] text-gray-300 hover:bg-[#151A22] transition'>
                        2
                    </button>

                    <button className='w-10 h-10 rounded-lg bg-[#0D1117] text-gray-300 hover:bg-[#151A22] transition'>
                        3
                    </button>

                    <button className='w-10 h-10 rounded-lg bg-[#0D1117] flex items-center justify-center text-gray-400 hover:bg-[#151A22] transition'>
                        <ChevronRight size={18} />
                    </button>

                </div>

            </div>

        </div>
    )
}

export default ProductTable