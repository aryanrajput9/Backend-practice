import axios from "axios";


export const useGlobleApi = axios.create(
    {
        baseURL: "/api",
        withCredentials: true
    }
)