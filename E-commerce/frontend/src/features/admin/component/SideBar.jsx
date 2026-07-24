import {
    LayoutDashboard,
    Package,
    ShoppingCart,
    Users,
    Folder,
    Settings,
    LogOut,
} from "lucide-react";
import { useNavigate } from "react-router";

const Sidebar = () => {
    const navigate = useNavigate()
    return (
        <div className="w-64 h-screen bg-gray-900 text-white p-5">

            <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>

            <ul className="space-y-3">

                <li className="flex items-center gap-3 p-2 rounded hover:bg-gray-800 cursor-pointer">
                    <LayoutDashboard size={20} />
                    Dashboard
                </li>

                <li onClick={() => navigate("/dashboard/adminpanel/createProduct")} className="flex items-center gap-3 p-2 rounded hover:bg-gray-800 cursor-pointer">
                    <Package size={20} />
                    Products
                </li>

                <li onClick={() => navigate("/dashboard/adminpanel/category")} className="flex items-center gap-3 p-2 rounded hover:bg-gray-800 cursor-pointer">
                    <Folder size={20} />
                    Categories
                </li>

                <li className="flex items-center gap-3 p-2 rounded hover:bg-gray-800 cursor-pointer">
                    <ShoppingCart size={20} />
                    Orders
                </li>

                <li className="flex items-center gap-3 p-2 rounded hover:bg-gray-800 cursor-pointer">
                    <Users size={20} />
                    Customers
                </li>

                <li className="flex items-center gap-3 p-2 rounded hover:bg-gray-800 cursor-pointer">
                    <Settings size={20} />
                    Settings
                </li>

            </ul>

            <button className="flex items-center gap-3 mt-10 p-2 text-red-400 hover:text-red-500">
                <LogOut size={20} />
                Logout
            </button>

        </div>
    );
};

export default Sidebar;