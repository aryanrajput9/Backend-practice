
import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { axiosInstance } from './AxiosInstance';

const Register = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();

    const handleRegisterdata = async (data) => {
        const res = await axiosInstance.post("registeruser", data);
        console.log(res)
        reset()
    }
    return (
        <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">

            <div className="w-full max-w-md bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-800">

                <h2 className="text-3xl font-bold text-center text-white mb-8">
                    Create Account
                </h2>

                <form onSubmit={handleSubmit(handleRegisterdata)} className="space-y-5">

                    <div>
                        <label className="text-gray-300 text-sm">
                            Full Name
                        </label>

                        <input
                            {...register("name")}
                            type="text"
                            placeholder="Enter your name"
                            className="w-full mt-2 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 outline-none text-white focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="text-gray-300 text-sm">
                            Email
                        </label>

                        <input
                            {...register("email")}
                            type="email"
                            placeholder="Enter email"
                            className="w-full mt-2 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 outline-none text-white focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="text-gray-300 text-sm">
                            Password
                        </label>

                        <input
                            {...register("password")}
                            type="password"
                            placeholder="Create password"
                            className="w-full mt-2 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 outline-none text-white focus:border-blue-500"
                        />
                    </div>


                    <button
                        className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-lg text-white font-semibold"
                    >
                        Register
                    </button>

                </form>

                <p className="text-center text-gray-400 mt-6">
                    Already have an account?
                    <span onClick={() => navigate("/")} className="text-blue-500 ml-2 cursor-pointer">
                        Login
                    </span>
                </p>

            </div>

        </div>
    )
}

export default Register