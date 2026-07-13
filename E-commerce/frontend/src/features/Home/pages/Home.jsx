import React, { useContext } from "react";
import { Search, ShoppingBag } from "lucide-react";
import { productsContext } from "../../../context/productContext";
import { useNavigate } from "react-router";

function Home() {



    const { productsData, setAddCart, addCart } = useContext(productsContext);

    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <div className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                    {/* Logo */}
                    <h1
                        onClick={() => navigate("/")}
                        className="text-3xl font-bold text-indigo-600 cursor-pointer"
                    >
                        My Store
                    </h1>

                    {/* Right Side */}
                    <div className="flex items-center gap-5">

                        <button onClick={() => navigate("/dashboard")}
                            className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                        >
                            Become a Seller
                        </button>

                        <button
                            onClick={() => navigate("/cart")}
                            className="relative p-2 hover:bg-gray-100 rounded-full transition"
                        >
                            <ShoppingBag size={28} />

                            {addCart.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs h-5 w-5 rounded-full flex items-center justify-center">
                                    {addCart.length}
                                </span>
                            )}
                        </button>

                    </div>
                </div>
            </div>

            {/* Search */}
            <div className="max-w-7xl mx-auto px-6 mt-8">
                <div className="bg-white rounded-lg shadow flex items-center px-4">
                    <Search className="text-gray-500" size={20} />
                    <input
                        type="text"
                        placeholder="Search Products..."
                        className="w-full px-3 py-3 outline-none"
                    />
                </div>
            </div>

            {/* Products */}
            <div className="max-w-7xl mx-auto px-6 py-10">
                <h2 className="text-2xl font-bold mb-6">Latest Products</h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {productsData.map((item) => (

                        <div
                            key={item._id}
                            className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
                        >
                            <img
                                src={item.images[1]}
                                alt={item.title}
                                className="w-full h-56 object-cover"
                            />

                            <div className="p-4">
                                <h3 className="font-semibold text-lg">
                                    {item.title}
                                </h3>

                                <p className="text-indigo-600 font-bold mt-2">
                                    ₹{item.price}
                                </p>
                                {addCart.length >= 1 ? (
                                    <div className="w-full mt-4 flex items-center justify-between bg-indigo-600 rounded-lg overflow-hidden">
                                        <button onClick={() => setAddCart((prev) => {
                                            if (prev >= 1) {
                                                return prev - 1
                                            };
                                            return prev
                                        })} className="px-4 py-2 text-white hover:bg-indigo-700 transition">
                                            -
                                        </button>

                                        <span className="text-white font-semibold">1</span>

                                        <button onClick={() => setAddCart((prev) => [...prev, item])} className="px-4 py-2 text-white hover:bg-indigo-700 transition">
                                            +
                                        </button>
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => setAddCart((prev) => [...prev, item])}
                                        className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition"
                                    >
                                        Add to Cart
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;