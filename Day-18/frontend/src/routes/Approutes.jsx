import React, { useEffect } from 'react'

import {
    createBrowserRouter,
    RouterProvider
} from "react-router";

import AuthLayout from "../Layout/AuthLayout";
import MainLayout from "../Layout/MainLayout";

import Login from "../features/Login";
import Register from "../features/Register";

import Home from "../pages/Home";

import PublicRoute from "../routes/PublicRoute";
import ProtectedRoute from "../routes/ProtectedRoute";
import { axiosInstance } from '../features/AxiosInstance';
import { useDispatch } from 'react-redux';
import { adduser, removuser } from '../store/UserSlice';

const Approutes = () => {
    const dispatch = useDispatch()
    const loginfetchdata = async () => {
        try {
            let res = await axiosInstance.get("/me");
            console.log(res);
            dispatch(adduser(res.data.user))
        } catch {
            dispatch(removuser());

        }
    }
    useEffect(() => {
        loginfetchdata()
    }, [])
    const route = createBrowserRouter([



        // Public Routes
        {
            element: <PublicRoute />,
            children: [

                {
                    element: <AuthLayout />,
                    children: [

                        {
                            path: "",
                            element: <Login />
                        },

                        {
                            path: "register",
                            element: <Register />
                        }

                    ]
                }

            ]
        },

        // Protected Routes
        {
            element: <ProtectedRoute />,
            children: [

                {
                    element: <MainLayout />,
                    children: [

                        {
                            path: "/home",
                            element: <Home />
                        }

                    ]
                }

            ]
        }

    ])

    return (
        <RouterProvider router={route} />
    )
}

export default Approutes