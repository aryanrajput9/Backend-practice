import React from "react";
import { useNavigate } from "react-router";
import { useAdminHook } from "../hook/adimHook";

function AdminRegister() {
    const navigate = useNavigate()

    const { useAdminRegisterHook } = useAdminHook();

    const { register, handleSubmit, registerOnSubmit, watch, errors } = useAdminRegisterHook()

    const password = watch("password")
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 via-gray-900 to-black px-4 py-10">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
                {/* Heading */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Admin Register
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Create your admin account to continue.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(registerOnSubmit)} className="space-y-5">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name
                        </label>
                        <input
                            {...register("name", {
                                required: "Name is requred"
                            })}
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                        />
                    </div>
                    {errors.name && (
                        <p className="text-red-500 text-sm animate-error">
                            {errors.name.message}
                        </p>
                    )}

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

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Confirm Password
                        </label>
                        <input
                            {...register("confirmPassword", {
                                required: "Confirm Password is required",
                                validate: (value) =>
                                    value === password || "Passwords do not match",
                            })}
                            type="password"
                            placeholder="Confirm your password"
                            className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                        />
                    </div>
                    {errors.confirmPassword && (
                        <p className="text-red-500 text-sm animate-error">
                            {errors.confirmPassword.message}
                        </p>
                    )}

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-300"
                    >
                        Create Account
                    </button>
                </form>

                {/* Login Link */}
                <div className="mt-6 text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <button
                        onClick={() => navigate("/dashboard")}
                        type="button"
                        className="text-indigo-600 hover:text-indigo-800 font-medium cursor-pointer"
                    >
                        Login
                    </button>
                </div>

                {/* Footer */}
                <div className="mt-6 text-center text-sm text-gray-500">
                    © 2026 Admin Panel
                </div>
            </div>
        </div>
    );
}

export default AdminRegister;