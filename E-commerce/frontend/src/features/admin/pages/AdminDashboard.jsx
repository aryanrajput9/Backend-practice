
import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import Navbar from '../component/NavBar'
import Sidebar from '../component/SideBar'




function AdminDashboard() {

    const { admindata } = useSelector((state) => state.admin)
    return (
        <div className="grid grid-cols-12 grid-rows-[70px_1fr] min-h-screen">
            {/* Navbar */}
            <div className="sticky top-[0px] z-50 col-span-12 row-start-1">
                <Navbar admindata={admindata} />
            </div>

            {/* Sidebar */}
            <div className="col-span-2 row-start-2">
                <div className="sticky top-[70px] h-[calc(100vh-70px)]">
                    <Sidebar />
                </div>
            </div>

            {/* Main Content */}
            <div className="col-span-10 row-start-2 overflow-y-auto">
                <Outlet />
            </div>
        </div>
    )
}

export default AdminDashboard
