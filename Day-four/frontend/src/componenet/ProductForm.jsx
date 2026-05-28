import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';

function ProductForm() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const handleFormData = async (data) => {
        let finalData = {
            productName: data.producttitle,
            category: data.category,

            price: {
                amount: data.price,
                currency: "INR"
            },
            description: data.discription,

        }

        const res = await axios.post("http://localhost:3000/lol",
            finalData)
        console.log(res)
        console.log(finalData)
        reset()
    }
    return (
        <div className='min-h-screen flex justify-center items-center bg-gray-100'>

            <form onSubmit={handleSubmit(handleFormData)} className='bg-white p-6 rounded-xl shadow-lg w-[400px]'>

                <h1 className='text-2xl font-bold text-center mb-5'>
                    Product Form
                </h1>

                <input
                    {...register("producttitle", { required: "Enter your Product" })}
                    type="text"
                    placeholder="Product Title"
                    className='w-full border p-2 rounded mb-4'
                />

                <input
                    {...register("price", { required: "Enter Your Product Price" })}
                    type="number"
                    placeholder="Price"
                    className='w-full border p-2 rounded mb-4'
                />

                <input
                    {...register("category", { required: "Enter Your Category in UpperCase" })}
                    type="text"
                    placeholder="Category"
                    className='w-full border p-2 rounded mb-4'
                />

                {/* <input
                {...register("")}
                    type="text"
                    placeholder="Image URL"
                    className='w-full border p-2 rounded mb-4'
                /> */}

                <textarea
                    {...register("discription", { required: "Enter your Discription" })}
                    placeholder="Description"
                    className='w-full border p-2 rounded mb-4 h-28'
                ></textarea>

                <button
                    className='w-full bg-black text-white py-2 rounded'
                >
                    Add Product
                </button>

            </form>

        </div>
    )
}

export default ProductForm