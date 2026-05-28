import React from 'react'
import {
    Menu,
    Bell
} from 'lucide-react'
import SideNav from './SideNav';

function Nav() {
    return (
        <nav className='w-full   border-white/5 flex flex-col'>

            <div className="flex justify-between  bg-[#05060A] p-4 h-[75px]">

                <div className='flex items-center gap-4'>

                    {/* Menu Button */}
                    <button className='text-[#C4B5FD] hover:text-white transition'>
                        <Menu size={22} />
                    </button>

                    {/* Logo */}
                    <h1 className='text-[30px] font-bold bg-gradient-to-r from-[#E9D5FF] to-[#8B5CF6] bg-clip-text text-transparent'>
                        Nexus Commerce
                    </h1>

                </div>


                <div className='flex items-center gap-5'>

                    {/* Notification */}
                    <button className='relative text-gray-300 hover:text-white transition'>

                        <Bell size={20} />

                        {/* Dot */}
                        <span className='absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500'></span>

                    </button>

                    {/* Profile */}
                    <div className='w-11 h-11 rounded-full overflow-hidden border-2 border-[#8B5CF6] cursor-pointer'>

                        <img
                            src='https://i.pravatar.cc/150?img=12'
                            alt='profile'
                            className='w-full h-full object-cover'
                        />

                    </div>

                </div>
            </div>


        </nav>
    )
}

export default Nav