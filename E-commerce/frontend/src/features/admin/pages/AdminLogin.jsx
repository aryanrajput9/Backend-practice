import React from "react";
import { useNavigate } from "react-router";
import { useAdminHook } from "../hook/adimHook";

function AdminLogin() {
    const navigate = useNavigate();

    const { useAdminLoginHook } = useAdminHook();

    const { register, handleSubmit, errors, loginOnSubmit } = useAdminLoginHook()


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 via-gray-900 to-black px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Admin Login
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Welcome back! Please login to continue.
                    </p>
                </div>

                <form onSubmit={handleSubmit(loginOnSubmit)} className="space-y-5">
                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                        </label>
                        <input
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Please enter a valid email address",
                                },
                            })}
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                        />
                    </div>
                    {errors.email && (
                        <p className="text-red-500 text-sm animate-error">
                            {errors.email.message}
                        </p>
                    )}

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 8,
                                    message: "Password must be at least 8 characters long",
                                },
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                                    message:
                                        "Password must contain at least one uppercase letter, one lowercase letter, and one number",
                                },
                            })}
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                        />
                    </div>

                    {errors.password && (
                        <p className="text-red-500 text-sm animate-error">
                            {errors.password.message}
                        </p>
                    )}

                    {/* Forgot Password */}
                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="text-sm text-indigo-600 hover:text-indigo-800 transition"
                        >
                            Forgot Password?
                        </button>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-300"
                    >
                        Login
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-500">
                    © 2026 Admin Panel
                </div>
                <div className="mt-6 text-center text-sm text-gray-600">
                    Don't have an admin account?{" "}

                    <span onClick={() => navigate("/dashboard/adminregister")} className="font-semibold text-md text-red-500 cursor-pointer"> Register</span>
                </div>
            </div>
        </div >

    );
}

export default AdminLogin;