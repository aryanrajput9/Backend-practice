
import axios from "axios";
import store from "../../../app/AppStore";
import { setAccesstoken } from "../state/adminState";




const adminApi = axios.create({
    baseURL: "/api",
    withCredentials: true,
});

adminApi.interceptors.request.use(
    (config) => {
        const token = store.getState().admin.adminaccessToken;

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

// Response Interceptor
adminApi.interceptors.response.use(
    (response) => response,

    async (error) => {
        const originalRequest = error.config;

        // Refresh request ko dobara intercept mat karo
        if (originalRequest.url?.includes("/admin/adminrefresh-token")) {
            return Promise.reject(error);
        }

        if (
            error.response?.status === 401 &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;

            try {
                const response = await adminApi.post(
                    "/admin/adminrefresh-token" // <-- apna route check kar lena
                );

                const newAccessToken = response.data.accessToken;

                // Redux Update
                store.dispatch(setAccesstoken(newAccessToken));

                // Retry Request
                originalRequest.headers = originalRequest.headers || {};
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

                return adminApi(originalRequest);

            } catch (refreshError) {
                console.error("Refresh Token Error:", refreshError);
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);


export const useAdminApi = () => {

    const registerApi = async (data) => {
        const resp = await adminApi.post("/admin/createAdmin", data);


        return resp.data
    };

    const loginApi = async (data) => {
        const resp = await adminApi.post("/admin/loginAdmin", data);

        return resp.data
    };

    const getAdmin = async () => {
        const resp = await adminApi.get("/admin/get-currAdmin");

        return resp.data
    }



    return {
        registerApi, loginApi, getAdmin
    }
}