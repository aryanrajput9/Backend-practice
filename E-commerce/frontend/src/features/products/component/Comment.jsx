import React, { useContext } from 'react'
import { Star } from "lucide-react";
import { productsContext } from '../../../context/productContext';

function Comment() {

    const { comment } = useContext(productsContext);

    return (

        <>
            {comment.map((comment) => {
                return <div key={comment.id} className="mt-10 border rounded-xl p-6 shadow-sm bg-white">
                    <div className="flex items-start justify-between">

                        <div className="flex items-center gap-4">
                            <img
                                src="https://i.pravatar.cc/100?img=12"
                                alt="user"
                                className="w-12 h-12 rounded-full"
                            />

                            <div>
                                <h3 className="font-semibold text-lg">
                                    {comment.name}
                                </h3>

                                <p className="text-sm text-gray-500">
                                    Verified Purchase
                                </p>
                            </div>
                        </div>

                        <span className="text-sm text-gray-500">
                            {new Date(comment.date).toLocaleDateString("en-IN")}
                        </span>

                    </div>

                    <div className="flex items-center gap-1 mt-4">
                        {comment.rating}
                    </div>

                    <h4 className="font-semibold text-lg mt-4">
                        Excellent Product 👍
                    </h4>

                    <p className="text-gray-600 mt-2 leading-7">
                        {comment.review}
                    </p>
                </div>
            })}
        </>

    )
}

export default Comment
