import { Bell, Search, UserCircle } from "lucide-react";

const Navbar = ({ admindata }) => {
    return (
        <div className="h-[100%] bg-white border-b flex items-center justify-between px-6 shadow-sm">

            {/* Left */}
            <h2 className="text-2xl font-semibold text-gray-800">
                Dashboard
            </h2>

            {/* Center */}
            <div className="relative w-96">
                <Search
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>

            {/* Right */}
            <div className="flex items-center gap-5">

                <button className="relative">
                    <Bell size={22} className="text-gray-700" />

                    <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center">
                        3
                    </span>
                </button>

                <div className="flex items-center gap-2 cursor-pointer">
                    <UserCircle size={34} className="text-gray-700" />

                    <div>
                        <h3 className="text-sm font-semibold">{admindata.name}</h3>
                        <p className="text-xs text-gray-500">
                            {admindata.email}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;