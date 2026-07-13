import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

function AdminProtectRoutes() {

    const { admindata, isLoading } = useSelector((state) => state.admin);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (!admindata) {
        return <Navigate to="/dashboard/adminlogin" replace />;
    }

    return <Outlet />;


}

export default AdminProtectRoutes
