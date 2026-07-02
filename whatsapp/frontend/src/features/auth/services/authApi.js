
import { globlApi } from "../../shared/globelapi";
import { store } from '../../../app/Store'


export const useAuthApi = globlApi.create({
    baseURL: "/api/auth",
    withCredentials: true
});


useAuthApi.interceptors.request.use(
    (config) => {

        const accessToken = store.getState().auth.accessToken;

        if (accessToken) {
            config.headers["Authorization"] = `Bearer ${accessToken}`
        };

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
);

useAuthApi.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (
            error.response?.status === 401 &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;

            try {
                const refreshResponse = await useAuthApi.post("/refresh-token");


                const newAccessToken = refreshResponse.data.accessToken;

                store.dispatch({
                    type: "auth/addAccessToken",
                    payload: newAccessToken,
                });

                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

                return useAuthApi(originalRequest);
            } catch (refreshError) {
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);


const useAuth = () => {


    const createUser = async (data) => {

        let resp = await useAuthApi.post("/registeruser", data);

        return resp.data

    }

    const loginUser = async (data) => {

        let resp = await useAuthApi.post("/loginuser", data);

        return resp.data
    };

    const getCurrentuser = async () => {
        const resp = await useAuthApi.get("/current-user")

        return resp.data
    }

    return {
        createUser, loginUser, getCurrentuser
    }
}


export default useAuth