import React from 'react'
import { axiosInstance } from '../features/AxiosInstance';
import { Navigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { removuser } from '../store/UserSlice';

const Home = () => {
    const dispatch = useDispatch()
    const logoutHandler = async () => {
        try {

            await axiosInstance.post('/logout');
            < Navigate to="/" ></Navigate >
            dispatch(removuser())

        } catch (error) {
            console.log("error in logout handler", error)
        }
    }
    return (
        <div>
            <h2>Home</h2>
            <button onClick={() => logoutHandler()} className="text-2xl bg-amber-200  px-2 py-1.5 cursor-pointer">Logout</button>
        </div>
    )
}

export default Home
