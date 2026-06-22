import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router';
import { MainContext } from '../features/context/MainContext';

const AuthLayout = () => {
    const { loginUser } = useContext(MainContext);

    if (loginUser?.name) {
        return <Navigate to={`/${loginUser.name}`} replace />;
    }
    return (
        <Outlet />
    )
}

export default AuthLayout
