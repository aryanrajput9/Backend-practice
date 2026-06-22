import React, { useContext, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'

import Home from '../home/pages/Home';
import Login from '../auth/pages/Login';
import Register from '../auth/pages/Register';
import AuthLayout from '../../layout/AuthLayout';
import MainLayout from '../../layout/MainLayout';
import { axiosInstance } from '../home/services/home.services';
import { MainContext } from '../context/MainContext';
import UserHome from '../home/pages/UserHome';

function Approutes() {

    const { setLoginUser, setLoading, setUserLink } = useContext(MainContext);


    useEffect(() => {

        (async () => {
            try {
                const resp = await axiosInstance.get("/auth/me");

                setLoginUser(resp.data.data);

                const profileResp = await axiosInstance.get(
                    `/link/profile/${resp.data.data._id}`
                );

                setUserLink(profileResp.data.data)

            } catch (error) {
                setLoginUser(null);
                console.log(error)
            } finally {
                setLoading(false);
            }
        })()
    }, [])
    const routes = createBrowserRouter([
        {
            element: <AuthLayout />,
            children: [
                {
                    path: "/",
                    element: <Login />
                },
                {
                    path: "/register",
                    element: <Register />
                },
            ]
        },
        {
            element: <MainLayout />,
            children: [
                {
                    path: "/:name",
                    element: <Home />
                },
                {
                    path: "/profile/:id",
                    element: <UserHome />
                }
            ]
        }
    ])
    return <RouterProvider router={routes}></RouterProvider>

}

export default Approutes
