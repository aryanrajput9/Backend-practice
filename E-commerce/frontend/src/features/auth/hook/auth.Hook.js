import { useForm } from "react-hook-form";
import { useAuthApi } from "../authApi/AuthApi";
import { useDispatch } from "react-redux";
import { setLoading, setUser } from "../state/authState";



const useAuthHook = () => {

    const { getMe } = useAuthApi();
    const dispatch = useDispatch();


    function useRegisterHook() {


        const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();

        const { createUser } = useAuthApi();



        const password = watch("password")

        const useRegisterSubmit = (data) => {
            console.log(data);
            createUser(data);
            reset()
        }


        return {
            register, handleSubmit, errors, useRegisterSubmit, password
        }

    }

    function useLoginHook() {


        const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();

        const { loginUser } = useAuthApi();



        const password = watch("password")

        const useLoginSubmit = (data) => {

            loginUser(data);


            reset()
        }


        return {
            register, handleSubmit, errors, useLoginSubmit, password
        }

    };

    async function handleCurrentUser() {

        try {

            const resp = await getMe();
            dispatch(setUser(resp.data))


        } catch (error) {
            console.log("error in handle currentUser", error)
        }
        finally {
            dispatch(setLoading(false));
        }
    }


    return {
        useRegisterHook, useLoginHook, handleCurrentUser
    }
}


export default useAuthHook