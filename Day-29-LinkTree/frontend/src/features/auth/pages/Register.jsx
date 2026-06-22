import React from "react";

import { RegisterHook } from "../hook/AuthDataHandle.hook";

function Register() {


    const { register, handleSubmit, errors, navigate, RegisterHandle } = RegisterHook()
    return (
        <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-xl">

                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white">
                        Create Account 🚀
                    </h1>
                    <p className="text-zinc-400 mt-2">
                        Register to get started
                    </p>
                </div>

                <form onSubmit={handleSubmit(RegisterHandle)} className="space-y-5">


                    <div>
                        <label className="block text-sm text-zinc-300 mb-2">
                            Username
                        </label>
                        <input
                            {...register("name",
                                {
                                    required: "Name is Required"
                                }
                            )}
                            type="text"
                            placeholder="@username"
                            className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white outline-none focus:border-lime-400"
                        />
                        {errors.name && (
                            <p className="text-red-400 text-sm mt-2 animate-pulse">{errors.name.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm text-zinc-300 mb-2">
                            Email
                        </label>
                        <input
                            {...register("email", {
                                required: "Email is Required"
                            })}
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white outline-none focus:border-lime-400"
                        />
                    </div>
                    {errors.email && (
                        <p className="text-red-400 text-sm mt-2 animate-pulse">{errors.email.message}</p>
                    )}

                    <div>
                        <label className="block text-sm text-zinc-300 mb-2">
                            Password
                        </label>
                        <input
                            {...register("password", {
                                required: "Password is Required",
                                minLength: {
                                    value: 8,
                                    message: "password lenght is atleast 8 ch"
                                }
                            })}
                            type="password"
                            placeholder="Create password"
                            className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white outline-none focus:border-lime-400"
                        />
                        {errors.password && (
                            <p className="text-red-400 text-sm mt-2 animate-pulse">{errors.password.message}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-lime-500 text-black font-semibold rounded-xl hover:bg-lime-400 transition-all duration-300"
                    >
                        Create Account
                    </button>
                </form>

                <p className="text-center text-zinc-400 mt-6">
                    Already have an account?{" "}
                    <span onClick={() => navigate("/")} className="text-lime-400 cursor-pointer hover:underline">
                        Login
                    </span>
                </p>

            </div>
        </div>
    );
}

export default Register;