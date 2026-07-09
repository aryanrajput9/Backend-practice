import { useDispatch } from "react-redux";
import { useGlobleApi } from "../../../services/globelApi";
import { setToken, setUser } from "../state/authState";
import { toast } from "react-toastify";
import store from "../../../app/AppStore";
import { useNavigate } from "react-router";





useGlobleApi.interceptors.request.use(

    (config) => {
        const token = store.getState().auth.accessToken;


        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        };
        return config
    },
    (error) => {
        return Promise.reject(error)
    }

)

useGlobleApi.interceptors.response.use(
    (response) => {
        return response
    },
    async (error) => {
        const orinalRequest = error.config;

        if (error.response && error.response.status === 401 && !orinalRequest._retry) {
            orinalRequest._retry = true;

            try {
                const refreshResponse = await useGlobleApi.post("/auth/refresh-token");


                const newAccessToken = refreshResponse.data.token;

                store.dispatch({ type: "auth/setToken", payload: newAccessToken });

                orinalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
                return useGlobleApi(orinalRequest)

            } catch (refreshError) {
                console.error("Refresh token failed:", refreshError)
                return Promise.reject(refreshError)
            }
        }
        return Promise.reject(error)
    }
)

export const useAuthApi = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate()


    const createUser = async (data) => {

        let resp = await useGlobleApi.post("/auth/registeruser", data);


        dispatch(setUser(resp.data.data));
        dispatch(setToken(resp.data.token))
        toast(resp.data.message);
        return resp.data
    };


    const loginUser = async (data) => {
        let resp = await useGlobleApi.post("/auth/loginuser", data);


        dispatch(setUser(resp.data.data));
        dispatch(setToken(resp.data.token))
        toast(resp.data.message);
        navigate("/home");
        return resp.data
    };

    const getMe = async () => {

        const resp = await useGlobleApi.get("/auth/current-user");


        return resp.data
    }



    return {
        createUser, loginUser, getMe
    }

}


