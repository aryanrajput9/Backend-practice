
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useRegisterDetailsHook } from "../hook/auth.hook";

function Register() {

    const { showPassword, setShowPassword, register, handleSubmit, errors, navigate, onSubmitRegister } = useRegisterDetailsHook()

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
                {/* Heading */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-slate-800">
                        Create Account 🚀
                    </h1>
                    <p className="mt-2 text-sm text-slate-500">
                        Register to get started
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmitRegister)} className="space-y-5">
                    {/* Name */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                            Full Name
                        </label>

                        <div className="flex items-center rounded-lg border border-slate-300 px-3 focus-within:border-blue-500">
                            <User size={18} className="text-slate-500" />
                            <input
                                {...register("username", {
                                    required: "Name is Required",
                                    minLength: {
                                        value: 3,
                                    }
                                })}
                                type="text"
                                placeholder="Enter your name"
                                className="w-full bg-transparent px-3 py-3 outline-none"
                            />
                        </div>
                        {errors.username && (
                            <p>{errors.username.message}</p>
                        )}
                    </div>

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
                            <p>{errors.email.message}</p>
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
                                    required: "Password is required"
                                })}
                                type={showPassword ? "text" : "password"}
                                placeholder="Create a password"
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
                            <p>{errors.password.message}</p>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                            Confirm Password
                        </label>

                        <div className="flex items-center rounded-lg border border-slate-300 px-3 focus-within:border-blue-500">
                            <Lock size={18} className="text-slate-500" />

                            <input

                                type="password"
                                placeholder="Confirm your password"
                                className="w-full bg-transparent px-3 py-3 outline-none"
                            />
                        </div>
                    </div>

                    {/* Terms */}
                    <label className="flex items-center gap-2 text-sm text-slate-600">
                        <input type="checkbox" />
                        I agree to the Terms & Conditions
                    </label>

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
                    >
                        Register
                    </button>
                </form>

                {/* Footer */}
                <p className="mt-6 text-center text-sm text-slate-600">
                    Already have an account?{" "}
                    <button onClick={() => navigate("/")} className="font-semibold text-blue-600 hover:underline">
                        Login
                    </button>
                </p>
            </div>
        </div>
    );
}

export default Register;