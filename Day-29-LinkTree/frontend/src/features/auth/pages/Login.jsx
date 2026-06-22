import React from "react";
import { LoginHook } from "../hook/AuthDataHandle.hook";

function Login() {

    const { register, handleSubmit, errors, navigate, LoginHandle } = LoginHook()

    return (
        <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-xl">

                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white">
                        Welcome Back 👋
                    </h1>
                    <p className="text-zinc-400 mt-2">
                        Login to your account
                    </p>
                </div>

                <form onSubmit={handleSubmit(LoginHandle)} className="space-y-5">
                    <div>
                        <label className="block text-sm text-zinc-300 mb-2">
                            Email
                        </label>
                        <input
                            {...register("identifier", {
                                required: "Email is Required",
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
                                required: "Password is Required"
                            })}
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white outline-none focus:border-lime-400"
                        />
                        {errors.password && (
                            <p className="text-red-400 text-sm mt-2 animate-pulse">{errors.password.message}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-lime-500 text-black font-semibold rounded-xl hover:bg-lime-400 transition"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center text-zinc-400 mt-6">
                    Don't have an account?{" "}
                    <span onClick={() => navigate("/register")} className="text-lime-400 cursor-pointer hover:underline">
                        Register
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Login;