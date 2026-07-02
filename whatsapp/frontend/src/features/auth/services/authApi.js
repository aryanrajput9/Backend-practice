
import { globlApi } from "../../shared/globelapi";


export const useAuthApi = globlApi.create({
    baseURL: "/api/auth",
    withCredentials: true
});


const useAuth = () => {


    const createUser = async (data) => {

        let resp = await useAuthApi.post("/registeruser", data);

        return resp.data

    }

    const loginUser = async (data) => {

        let resp = await useAuthApi.post("/loginuser", data);

        return resp.data
    };


    return {
        createUser, loginUser
    }
}


export default useAuth