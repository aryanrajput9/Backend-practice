import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useLoginDetailsHook } from "../hook/auth.hook";

function Login() {

    const { showPassword, setShowPassword, navigate, register, handleSubmit, errors, onSubmitLogin } = useLoginDetailsHook()

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
                {/* Heading */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-slate-800">
                        Welcome Back 👋
                    </h1>
                    <p className="mt-2 text-sm text-slate-500">
                        Sign in to continue to your account
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmitLogin)} className="space-y-5">
                    {/* Email */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                            Email Address
                        </label>

                        <div className="flex items-center rounded-lg border border-slate-300 px-3 focus-within:border-blue-500">
                            <Mail size={18} className="text-slate-500" />

                            <input
                                {...register("email", {
                                    required: "Email is required"
                                })}
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-transparent px-3 py-3 outline-none"
                            />

                        </div>
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-500 transition-all duration-300 ease-in-out opacity-100 translate-y-0">
                                {errors.email.message}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                            Password
                        </label>

                        <div className="flex items-center rounded-lg border border-slate-300 px-3 focus-within:border-blue-500">
                            <Lock size={18} className="text-slate-500" />

                            <input
                                {...register("password", {
                                    required: "Password is Required"
                                })}
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                className="w-full bg-transparent px-3 py-3 outline-none"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <EyeOff size={20} className="text-slate-500" />
                                ) : (
                                    <Eye size={20} className="text-slate-500" />
                                )}
                            </button>
                        </div>
                        {errors.password && (
                            <p className="mt-1 text-sm text-red-500 transition-all duration-300 ease-in-out opacity-100 translate-y-0">
                                {errors.password.message}</p>
                        )}
                    </div>

                    {/* Remember & Forgot */}
                    <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2 text-sm text-slate-600">
                            <input type="checkbox" />
                            Remember me
                        </label>

                        <button
                            type="button"
                            className="text-sm font-medium text-blue-600 hover:underline"
                        >
                            Forgot Password?
                        </button>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
                    >
                        Login
                    </button>
                </form>

                {/* Footer */}
                <p className="mt-6 text-center text-sm text-slate-600">
                    Don't have an account?{" "}
                    <button onClick={() => navigate("/register")} className="font-semibold text-blue-600 hover:underline">
                        Sign Up
                    </button>
                </p>
            </div>
        </div>
    );
}

export default Login;