import React from 'react'

function Login() {
    return (
        <div className='min-h-screen bg-black flex items-center justify-center px-4'>

            <div className='w-full max-w-md bg-[#111827]/70 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-[0_0_40px_rgba(139,92,246,0.25)]'>

                {/* Heading */}
                <div className='text-center mb-8'>
                    <h1 className='text-4xl font-bold text-[#E9D5FF]'>
                        Welcome Back
                    </h1>

                    <p className='text-gray-400 mt-2'>
                        Login to continue
                    </p>
                </div>

                {/* Form */}
                <form className='space-y-5'>

                    {/* Email */}
                    <div>
                        <label className='block text-sm text-gray-300 mb-2'>
                            Email
                        </label>

                        <input
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
                            type="password"
                            placeholder='Enter your password'
                            className='w-full bg-[#1F2937] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#8B5CF6]'
                        />
                    </div>

                    {/* Role Select */}
                    <div>
                        <label className='block text-sm text-gray-300 mb-2'>
                            Continue As
                        </label>

                        <select
                            className='w-full bg-[#1F2937] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#8B5CF6]'
                        >
                            <option>User</option>
                            <option>Admin</option>
                        </select>
                    </div>

                    {/* Forgot Password */}
                    <div className='flex justify-end'>
                        <button
                            type='button'
                            className='text-sm text-[#C4B5FD] hover:text-white transition'
                        >
                            Forgot Password?
                        </button>
                    </div>

                    {/* Button */}
                    <button
                        className='w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-[#8B5CF6] to-[#2563EB] hover:scale-[1.02] transition duration-300 shadow-[0_0_30px_rgba(139,92,246,0.35)]'
                    >
                        Login
                    </button>
                </form>

                {/* Footer */}
                <p className='text-center text-gray-400 text-sm mt-6'>
                    Don’t have an account?{" "}
                    <span className='text-[#C4B5FD] cursor-pointer hover:text-white'>
                        Register
                    </span>
                </p>

            </div>

        </div>
    )
}

export default Login