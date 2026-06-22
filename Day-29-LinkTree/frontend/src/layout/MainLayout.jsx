import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router';
import { MainContext } from '../features/context/MainContext';

function MainLayout() {

    const { loginUser, loading } = useContext(MainContext);
    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (!loginUser) {
        return <Navigate to="/" />;
    }


    return (
        <Outlet />
    )
}

export default MainLayout
