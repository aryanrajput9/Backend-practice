import React, { lazy } from 'react'
import { createBrowserRouter } from 'react-router';
import Login from '../features/auth/pages/Login';
import Protected from '../features/shared/component/protected';
import Home from '../features/auth/pages/Home';
const Register = lazy(() => import('../features/auth/pages/Register'))



const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/home",
        element: <Protected />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    }
])


export default AppRoutes
