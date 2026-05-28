import React from 'react'
import {
    Package,
    BarChart3,
    ShoppingCart,
    Users,
    Megaphone,
    Settings
} from 'lucide-react'

function SideNav() {

    const navItems = [
        {
            name: "Inventory",
            icon: <Package size={18} />
        },
        {
            name: "Analytics",
            icon: <BarChart3 size={18} />
        },
        {
            name: "Orders",
            icon: <ShoppingCart size={18} />
        },
        {
            name: "Customers",
            icon: <Users size={18} />
        },
        {
            name: "Marketing",
            icon: <Megaphone size={18} />
        },
        {
            name: "Settings",
            icon: <Settings size={18} />
        }
    ]

    return (
        <div className='w-[220px] min-h-screen bg-[#07080D] border-r border-white/5 flex flex-col py-5'>

            {/* Menu Items */}
            <div className='flex flex-col gap-1 mt-4'>

                {
                    navItems.map((item, index) => (

                        <button
                            key={index}
                            className={`flex items-center gap-4 px-5 py-4 text-sm font-medium transition-all duration-300

                            ${item.name === "Inventory"
                                    ? "bg-gradient-to-r from-[#2A223F] to-[#171720] text-[#D8B4FE] border-l-2 border-[#8B5CF6]"
                                    : "text-gray-300 hover:bg-[#11131A]"
                                }
                            `}
                        >

                            <span>
                                {item.icon}
                            </span>

                            <span>
                                {item.name}
                            </span>

                        </button>

                    ))
                }

            </div>

        </div>
    )
}

export default SideNav