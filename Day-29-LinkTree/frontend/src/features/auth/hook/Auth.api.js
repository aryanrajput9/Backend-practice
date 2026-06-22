
import { axiosInstance } from "../../home/services/home.services";
import { MainContext } from "../../context/MainContext";
import { useContext } from "react";
import { useNavigate } from "react-router";



const AuthApi = () => {


    const { setLoginUser } = useContext(MainContext);
    const navigate = useNavigate()


    const useRegister = async (data) => {

        const resp = await axiosInstance.post("auth/register", data);
        return resp
    };

    const useLogin = async (data) => {



        try {
            const resp = await axiosInstance.post("auth/login", data);
            setLoginUser(resp.data.data);
            navigate(`/${resp.data.name}`);

        } catch (error) {
            console.log(error);
        }
    };


    return {
        useLogin, useRegister
    }
};


export default AuthApi
