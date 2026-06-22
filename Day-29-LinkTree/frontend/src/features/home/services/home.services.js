import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://backend-lr35.onrender.com/api",
    withCredentials: true,
});