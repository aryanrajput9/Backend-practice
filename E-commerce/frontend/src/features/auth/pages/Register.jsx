import React from "react";
import useAuthHook from "../hook/auth.Hook";
import { useNavigate } from "react-router";

function Register() {

    const { useRegisterHook } = useAuthHook();

    const navigate = useNavigate();

    const { register, handleSubmit, errors, useRegisterSubmit, password } = useRegisterHook()

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
                <h1 className="text-3xl font-bold text-center mb-2">
                    Create Account
                </h1>
                <p className="text-center text-gray-500 mb-8">
                    Register to continue
                </p>

                <form onSubmit={handleSubmit(useRegisterSubmit)} className="space-y-2">
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Full Name
                        </label>
                        <input
                            {...register("username", {
                                required: "Username is Required*",
                                minLength: {
                                    value: 4
                                }
                            })}
                            type="text"
                            placeholder="Enter your name"
                            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {errors.username && (
                        <p className="text-red-500 text-sm transform transition-all duration-200 error">{errors.username.message}</p>
                    )}

                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Email
                        </label>
                        <input
                            {...register("email", {
                                required: "email is required*"
                            })}
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {errors.email && (
                        <p className="text-red-500 text-sm transform transition-all duration-200 error">{errors.email.message}</p>
                    )}

                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Phone Number
                        </label>
                        <input
                            {...register("phone", {
                                required: "Phone number is required*",
                                pattern: {
                                    value: /^[6-9]\d{9}$/,
                                    message: "Enter a valid 10-digit phone number",
                                },
                            })}
                            type="tel"
                            placeholder="Enter your phone number"
                            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {errors.phone && (
                        <p className="text-red-500 text-sm transform transition-all duration-200 error">
                            {errors.phone.message}
                        </p>
                    )}

                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Password
                        </label>
                        <input
                            {...register("password", {
                                required: "password is required*",
                                minLength: {
                                    value: 6,
                                    message: "atleast 6 ch"
                                }
                            })}
                            type="password"
                            placeholder="Enter your password"
                            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {errors.password && (
                        <p className="text-red-500 text-sm transform transition-all duration-200 error">{errors.password.message}</p>
                    )}

                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Confirm Password
                        </label>
                        <input
                            {...register("conformpassword",
                                {
                                    required: "conform password is required*",
                                    validate: (value) => value === password || "password is not match"
                                })}
                            type="password"
                            placeholder="Confirm your password"
                            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {errors.conformpassword && (
                        <p className="text-red-500 text-sm transform transition-all duration-200 error">{errors.conformpassword.message}</p>
                    )}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
                    >
                        Register
                    </button>
                </form>

                <p className="text-center text-gray-600 mt-6">
                    Already have an account?{" "}
                    <span onClick={() => navigate("/")} className="text-blue-600 font-semibold cursor-pointer hover:underline">
                        Login
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Register;