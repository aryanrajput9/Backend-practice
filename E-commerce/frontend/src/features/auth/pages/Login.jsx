import React from "react";
import useAuthHook from "../hook/auth.Hook";
import { useNavigate } from "react-router";

function Login() {


    const { useLoginHook } = useAuthHook();

    const navigate = useNavigate();

    const { register, handleSubmit, errors, useLoginSubmit } = useLoginHook()

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
                <h1 className="text-3xl font-bold text-center mb-2">
                    Welcome Back
                </h1>

                <p className="text-center text-gray-500 mb-8">
                    Login to your account
                </p>

                <form onSubmit={handleSubmit(useLoginSubmit)} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Email
                        </label>
                        <input
                            {...register("email", {
                                required: "email is required"
                            })}
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {errors.email && (
                        <p className="text-red-500 text-sm transform transition-all duration-200 error">
                            {errors.email.message}
                        </p>
                    )}

                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-medium">
                                Password
                            </label>

                            <button
                                type="button"
                                className="text-sm text-blue-600 hover:underline"
                            >
                                Forgot Password?
                            </button>
                        </div>

                        <input
                            {...register("password", {
                                required: "password is required"
                            })}
                            type="password"
                            placeholder="Enter your password"
                            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {errors.password && (
                        <p className="text-red-500 text-sm transform transition-all duration-200 error">
                            {errors.password.message}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center text-gray-600 mt-6">
                    Don't have an account?{" "}
                    <span onClick={() => navigate("/register")} className="text-blue-600 font-semibold cursor-pointer hover:underline">
                        Register
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Login;