import React, { lazy } from 'react'
import { createBrowserRouter } from 'react-router';
import Login from '../features/auth/pages/Login';
import Home from '../features/Home/pages/Home';
import AuthProtectRoutes from '../routes/AuthProtectRoutes';
import Cart from '../features/Home/component/Cart';
import AdminProtectRoutes from '../routes/AdminProtectRoutes';
import Dashboardlayout from '../layout/Dashboardlayout';
import AdminLogin from '../features/admin/pages/AdminLogin';
import AdminRegister from '../features/admin/pages/AdminRegister';
import AdminPanel from '../features/admin/pages/AdminPanel';
import AdminDashboard from '../features/admin/pages/AdminDashboard';
import CreateProductPage from '../features/products/pages/CreateProductPage';
import AddCategory from '../features/products/pages/AddCategory';
import ProductDetail from '../features/products/component/ProductDetail';
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
            },
            {
                path: "home/productdetails/:id",
                element: <ProductDetail />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboardlayout />,
        children: [
            {
                path: "",
                element: <AdminLogin />
            },
            {
                path: "adminregister",
                element: <AdminRegister />
            },
            {
                element: <AdminProtectRoutes />,
                children: [
                    {
                        path: "adminpanel",
                        element: <AdminDashboard />,
                        children: [
                            {
                                path: "",
                                element: <AdminPanel />
                            },
                            {
                                path: "createProduct",
                                element: <CreateProductPage />
                            },
                            {
                                path: "category",
                                element: <AddCategory />
                            }
                        ]
                    }
                ]
            }
        ]
    }
])

export default AppRoute
