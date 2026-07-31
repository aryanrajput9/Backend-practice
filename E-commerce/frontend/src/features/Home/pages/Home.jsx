import React, { useContext } from "react";
import { Search, ShoppingBag } from "lucide-react";
import { productsContext } from "../../../context/productContext";
import { useNavigate } from "react-router";

function Home() {



    const { productsData, setAddCart, addCart, quantity, setProductDetails } = useContext(productsContext);

    const navigate = useNavigate();


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
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10 py-10">
                {productsData.map((item) => {

                    let cartItem = null;

                    if (addCart) {
                        cartItem = addCart.find((cart) => cart._id === item._id);
                    }

                    return (
                        <div
                            key={item._id}
                            className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
                        >
                            <img
                                onClick={() => {
                                    navigate(`/home/productdetails/${item._id}`);
                                    setProductDetails(item)
                                }}
                                src={item.images[0]}
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

                                {cartItem ? (

                                    <div className="w-full mt-4 flex items-center justify-between bg-indigo-600 rounded-lg shadow-md overflow-hidden">

                                        <button
                                            onClick={() =>
                                                setAddCart(prev =>
                                                    prev
                                                        .map(elem =>
                                                            elem._id === item._id
                                                                ? {
                                                                    ...elem,
                                                                    quantity:
                                                                        elem.quantity - 1,
                                                                }
                                                                : elem
                                                        )
                                                        .filter(elem => elem.quantity > 0)
                                                )
                                            }
                                            className="w-12 h-12 flex items-center justify-center text-white text-2xl font-bold hover:bg-indigo-700 transition"
                                        >
                                            -
                                        </button>

                                        <span className="flex-1 text-center text-white text-lg font-semibold">
                                            {cartItem.quantity}
                                        </span>

                                        <button
                                            onClick={() =>
                                                setAddCart(prev =>
                                                    prev.map(elem =>
                                                        elem._id === item._id
                                                            ? {
                                                                ...elem,
                                                                quantity:
                                                                    elem.quantity + 1,
                                                            }
                                                            : elem
                                                    )
                                                )
                                            }
                                            className="w-12 h-12 flex items-center justify-center text-white text-2xl font-bold hover:bg-indigo-700 transition"
                                        >
                                            +
                                        </button>

                                    </div>

                                ) : (

                                    <button
                                        onClick={() =>
                                            setAddCart(prev => [
                                                ...prev,
                                                {
                                                    ...item,
                                                    quantity: 1,
                                                },
                                            ])
                                        }
                                        className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold shadow-md transition"
                                    >
                                        Add To Cart
                                    </button>

                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div >
    );
}

export default Home;