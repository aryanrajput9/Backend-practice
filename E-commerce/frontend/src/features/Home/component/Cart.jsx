import React, { useContext, useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { productsContext } from "../../../context/productContext";

function Cart() {


    const { addCart, setAddCart } = useContext(productsContext);
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        if (!addCart) {
            return <h1>Loading...</h1>;
        };

        const total = addCart.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        );

        setSubtotal(total)

    }, [addCart]);
    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-8">

                {/* Cart Items */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">
                    <h2 className="text-2xl font-bold mb-6">
                        Shopping Cart ({addCart.length})
                    </h2>

                    <div className="space-y-5">
                        {addCart.map((item) => (

                            <div
                                key={item._id}
                                className="flex flex-col sm:flex-row gap-5 border-b pb-5"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-32 h-32 rounded-lg object-cover"
                                />

                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold">
                                        {item.title}
                                    </h3>

                                    <p className="text-green-600 font-bold mt-2">
                                        ₹{item.price.toLocaleString()}
                                    </p>

                                    <div className="flex items-center gap-3 mt-4">
                                        <button className="w-8 h-8 rounded border hover:bg-gray-100"
                                            disabled={item.quantity <= 1}
                                            onClick={() => {
                                                setAddCart((prev) =>
                                                    prev.map((elem) => {
                                                        if (elem._id === item._id) {
                                                            return {
                                                                ...elem,
                                                                quantity: elem.quantity - 1,
                                                            };
                                                        }
                                                        return elem;
                                                    })
                                                );
                                            }}
                                        >
                                            -
                                        </button>

                                        <span>{item.quantity}</span>

                                        <button onClick={() =>

                                            setAddCart((prev) => {
                                                const update = prev.map((elem) => {
                                                    if (elem._id === item._id) {
                                                        return {
                                                            ...elem,
                                                            quantity: elem.quantity + 1
                                                        }
                                                    };
                                                    return elem
                                                });
                                                return update
                                            })

                                        } className="w-8 h-8 rounded border hover:bg-gray-100">
                                            +
                                        </button>
                                    </div>
                                </div>

                                <button onClick={() => setAddCart((prev) => {
                                    return prev.filter((elem) => elem._id !== item._id)
                                })} className="text-red-500 hover:text-red-700">
                                    <Trash2 />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Order Summary */}
                <div className="bg-white rounded-xl shadow p-6 h-fit sticky top-5">
                    <h2 className="text-xl font-bold mb-5">
                        Order Summary
                    </h2>

                    <div className="space-y-3 text-gray-700">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>₹{subtotal.toLocaleString()}</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Shipping</span>
                            <span className="text-green-600">
                                Free
                            </span>
                        </div>

                        <div className="border-t pt-3 flex justify-between text-lg font-bold">
                            <span>Total</span>
                            <span>₹{subtotal.toLocaleString()}</span>
                        </div>
                    </div>

                    <button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition">
                        Proceed to Checkout
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Cart;