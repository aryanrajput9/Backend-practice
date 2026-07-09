import React, { lazy } from 'react'
import { createBrowserRouter } from 'react-router';
import Login from '../features/auth/pages/Login';
import Home from '../features/Home/pages/Home';
import AuthProtectRoutes from '../routes/AuthProtectRoutes';
import Cart from '../features/Home/component/Cart';
const Register = lazy(() => import("../features/auth/pages/Register"))

const AppRoute = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        element: <AuthProtectRoutes />,
        children: [
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ]
    }
])

export default AppRoute
