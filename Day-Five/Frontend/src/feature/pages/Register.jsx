import React from 'react'
import { useForm, Watch } from 'react-hook-form';

function Register() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    return (
        <div className='min-h-screen bg-black flex items-center justify-center px-4'>

            <div className='w-full max-w-md bg-[#111827]/70 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-[0_0_40px_rgba(139,92,246,0.25)]'>

                {/* Heading */}
                <div className='text-center mb-8'>
                    <h1 className='text-4xl font-bold text-[#E9D5FF]'>
                        Create Account
                    </h1>

                    <p className='text-gray-400 mt-2'>
                        Register to continue
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className='space-y-5'>

                    {/* Full Name */}
                    <div>
                        <label className='block text-sm text-gray-300 mb-2'>
                            Full Name
                        </label>

                        <input
                            {...register("name", { required: "Enter Your name" })}
                            type="text"
                            placeholder='Enter your name'
                            className='w-full bg-[#1F2937] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#8B5CF6]'
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className='block text-sm text-gray-300 mb-2'>
                            Email
                        </label>

                        <input
                            {...register("email", { required: "Enter Your Email" })}
                            type="email"
                            placeholder='Enter your email'
                            className='w-full bg-[#1F2937] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#8B5CF6]'
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className='block text-sm text-gray-300 mb-2'>
                            Password
                        </label>

                        <input
                            {...register("password", {
                                required: "Enter Your Password", minLength: {
                                    value: 8,
                                    message: "Password must be 8 ch"
                                },
                                maxLength: {
                                    value: 10,
                                    message: "Password must be 8 ch"
                                }
                            }, {

                            })}
                            type="password"
                            placeholder='Create password'
                            className='w-full bg-[#1F2937] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#8B5CF6]'
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className='block text-sm text-gray-300 mb-2'>
                            Confirm Password
                        </label>

                        <input
                            {...register("conformpassword", {
                                validate: (value) => {
                                    if (value !== Watch("password")) {
                                        return "Password do not same"
                                    }
                                    return true
                                }
                            })}
                            type="password"
                            placeholder='Confirm password'
                            className='w-full bg-[#1F2937] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#8B5CF6]'
                        />
                    </div>

                    {/* Role Select */}
                    <div>
                        <label className='block text-sm text-gray-300 mb-2'>
                            Register As
                        </label>

                        <select
                            className='w-full bg-[#1F2937] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#8B5CF6]'
                        >
                            <option>User</option>
                            <option>Admin</option>
                        </select>
                    </div>

                    {/* Register Button */}
                    <button
                        className='w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-[#8B5CF6] to-[#2563EB] hover:scale-[1.02] transition duration-300 shadow-[0_0_30px_rgba(139,92,246,0.35)]'
                    >
                        Register
                    </button>
                </form>

                {/* Footer */}
                <p className='text-center text-gray-400 text-sm mt-6'>
                    Already have an account?{" "}
                    <span className='text-[#C4B5FD] cursor-pointer hover:text-white'>
                        Login
                    </span>
                </p>

            </div>

        </div>
    )
}

export default Register