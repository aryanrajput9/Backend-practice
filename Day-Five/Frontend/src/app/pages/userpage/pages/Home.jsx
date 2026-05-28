import React from 'react'
import {
    Star,
    ShoppingCart,
} from "lucide-react";


function Home() {
    const products = [
        {
            id: 1,
            name: "Nexus Chrono V1",
            price: "$299.00",
            image:
                "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800&auto=format&fit=crop",
        },
        {
            id: 2,
            name: "Aura Studio Pods",
            price: "$450.00",
            image:
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
        },
        {
            id: 3,
            name: "Velocity Sprint-X",
            price: "$185.00",
            image:
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
        },
        {
            id: 4,
            name: "Zenith Sculpt Vase",
            price: "$120.00",
            image:
                "https://images.unsplash.com/photo-1612196808214-b7e239e5f0d4?q=80&w=800&auto=format&fit=crop",
        },
        {
            id: 5,
            name: "Optic Retro MKII",
            price: "$890.00",
            image:
                "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop",
        },
    ];
    const smallProducts = [
        {
            id: 1,
            title: "Aviator Gold Edition",
            price: "$180.00",
            rating: "4.8",
            image:
                "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1200&auto=format&fit=crop",
        },
        {
            id: 2,
            title: "Essential Tech Tee",
            price: "$45.00",
            rating: "4.9",
            image:
                "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
        },
        {
            id: 3,
            title: "Nexus Pro 14",
            price: "$1,299.00",
            rating: "5.0",
            image:
                "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format&fit=crop",
        },
        {
            id: 4,
            title: "Bifold Onyx Wallet",
            price: "$85.00",
            rating: "4.7",
            image:
                "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1200&auto=format&fit=crop",
        },
    ];

    return (
        <div className="w-full h-screen">
            <div className="w-full  bg-black flex items-center justify-center p-6">
                <div className="relative w-full  h-[500px] rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">

                    {/* Background Image */}
                    <img
                        src="one.png"
                        alt="hero"
                        className="w-full h-full object-cover"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* Content */}
                    <div className="absolute top-0 left-0 w-full h-full flex items-center">
                        <div className="max-w-xl px-10 md:px-16 text-white">

                            <p className="text-sm tracking-[4px] uppercase text-violet-400 mb-4">
                                Seasonal Exclusive
                            </p>

                            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                                New Arrivals
                            </h1>

                            <p className="text-zinc-300 text-lg leading-relaxed mb-8">
                                Experience the pinnacle of engineering and aesthetic refinement
                                in our latest curated collection.
                            </p>

                            <button className="px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-500 transition-all duration-300 text-white font-semibold shadow-lg shadow-violet-700/30">
                                Explore Now
                            </button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full  bg-black text-white px-6 py-5">

                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold">Recently Viewed</h2>

                    <button className="text-violet-400 hover:text-violet-300 text-sm font-medium">
                        View All
                    </button>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {products.map((item) => (
                        <div
                            key={item.id}
                            className="group bg-[#0B1020] rounded-2xl overflow-hidden border border-zinc-800 hover:border-violet-500 transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-[250px] object-cover group-hover:scale-105 transition-all duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <h3 className="text-sm text-zinc-300 mb-2">
                                    {item.name}
                                </h3>

                                <p className="text-violet-400 text-xl font-bold">
                                    {item.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full  bg-black text-white px-6 py-5">

                {/* Heading */}
                <h2 className="text-3xl font-bold mb-8">
                    Recommended For You
                </h2>

                {/* Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6">

                    {/* Left Big Card */}
                    <div className="bg-[#11131C] border border-zinc-800 rounded-3xl p-5">

                        {/* Badge */}
                        <div className="inline-block px-4 py-1 rounded-full bg-violet-300 text-black text-xs font-semibold mb-5">
                            Bestseller
                        </div>

                        {/* Image */}
                        <div className="overflow-hidden rounded-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1400&auto=format&fit=crop"
                                alt="shoe"
                                className="w-full h-[430px] object-cover hover:scale-105 transition-all duration-500"
                            />
                        </div>

                        {/* Content */}
                        <div className="mt-6 flex items-start justify-between">
                            <div>
                                <h3 className="text-4xl font-bold mb-2">
                                    Phantom Elite Runners
                                </h3>

                                <p className="text-zinc-400">
                                    Unmatched performance meets urban aesthetics.
                                </p>

                                {/* Rating */}
                                <div className="flex items-center gap-1 mt-5">
                                    {[1, 2, 3, 4, 5].map((item) => (
                                        <Star
                                            key={item}
                                            size={16}
                                            className="fill-emerald-400 text-emerald-400"
                                        />
                                    ))}

                                    <span className="text-sm text-zinc-400 ml-2">
                                        (1.2k reviews)
                                    </span>
                                </div>
                            </div>

                            <p className="text-4xl font-bold text-violet-300">
                                $210.00
                            </p>
                        </div>

                        {/* Button */}
                        <button className="w-full mt-8 bg-zinc-800 hover:bg-violet-600 transition-all duration-300 rounded-2xl py-4 flex items-center justify-center gap-3 font-semibold">
                            <ShoppingCart size={20} />
                            Add to Cart
                        </button>
                    </div>

                    {/* Right Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {smallProducts.map((item) => (
                            <div
                                key={item.id}
                                className="bg-[#11131C] border border-zinc-800 rounded-3xl p-4 hover:border-violet-500 transition-all duration-300"
                            >

                                {/* Image */}
                                <div className="overflow-hidden rounded-2xl">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-[220px] object-cover hover:scale-105 transition-all duration-500"
                                    />
                                </div>

                                {/* Content */}
                                <div className="mt-4">
                                    <h3 className="text-lg font-semibold mb-3">
                                        {item.title}
                                    </h3>

                                    <div className="flex items-center justify-between">
                                        <p className="text-2xl font-bold text-violet-300">
                                            {item.price}
                                        </p>

                                        <div className="flex items-center gap-1 text-emerald-400">
                                            <Star
                                                size={14}
                                                className="fill-emerald-400"
                                            />
                                            <span className="text-sm">
                                                {item.rating}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Button */}
                                    <button className="w-full mt-5 bg-zinc-800 hover:bg-violet-600 transition-all duration-300 rounded-xl py-3 text-sm font-semibold">
                                        Quick Add
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Home
