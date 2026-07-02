import axios from "axios";

export const globlApi = axios.create(
    {
        baseURL: "/api",
        withCredentials: true
    }
)