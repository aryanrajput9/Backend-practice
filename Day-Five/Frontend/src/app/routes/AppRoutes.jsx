import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router';
import DashboardLayout from '../layouts/DashboardLayout';
import AdminDashboard from '../pages/adminpage/dashboard/AdminDashboard';
import ProductTable from '../pages/adminpage/pages/ProductTable';
import UserDashboard from '../pages/userpage/dashboard/UserDashboard';
import UserDashboardLayout from '../layouts/UserDashboardLayout';
import Home from '../pages/userpage/pages/Home';

function AppRoutes() {
    const routes = createBrowserRouter([
        {
            element: <AdminDashboard />,
            children: [
                {
                    element: <DashboardLayout />,
                    children: [
                        {
                            path: "",
                            element: <ProductTable />
                        }
                    ]
                }
            ]
        },
        {
            element: <UserDashboard />,
            children: [
                {
                    element: <UserDashboardLayout />,
                    children: [
                        {
                            path: "home",
                            element: <Home />
                        }
                    ]
                }
            ]

        }
    ])
    return (
        <RouterProvider router={routes}></RouterProvider>
    )
}

export default AppRoutes
