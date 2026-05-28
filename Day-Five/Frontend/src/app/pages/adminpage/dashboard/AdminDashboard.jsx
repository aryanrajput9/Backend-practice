import React from 'react'
import Nav from '../../../../shared/component/Nav'
import SideNav from '../../../../shared/component/SideNav'
import DashboardLayout from '../../../layouts/DashboardLayout'

function AdminDashboard() {
    return (
        <div className='h-screen  grid grid-rows-[75px_1fr]'>

            {/* Navbar */}
            <div className='border-b border-white/5'>
                <Nav />
            </div>

            {/* Main Section */}
            <div className='grid grid-cols-[220px_1fr]'>

                {/* Sidebar */}
                <div className='border-r border-white/5 h-[calc(100vh-75px)] '>
                    <SideNav />
                </div>

                {/* Dashboard Content */}
                <div className=' overflow-y-auto h-[calc(100vh-75px)]'>
                    <DashboardLayout />
                </div>

            </div>

        </div>
    )
}

export default AdminDashboard