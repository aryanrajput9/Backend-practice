import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import useAuth from "../services/authApi";
import { useDispatch } from "react-redux";
import { addAccessToken, addLoading, addUser } from "../state/auth.slice";
import { toast } from "react-toastify";




export const useRegisterDetailsHook = () => {

    const [showPassword, setShowPassword] = useState(false);

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    const dispatch = useDispatch()

    const navigate = useNavigate();
    const { createUser } = useAuth()

    const password = watch("password");

    const onSubmitRegister = async (data) => {

        const user = await createUser(data);

        dispatch(addUser(user.data.user))
        dispatch(addAccessToken(user.data.accessToken));
        toast(user.message)

        reset()
    }


    return {
        showPassword, setShowPassword, register, handleSubmit, errors, navigate, onSubmitRegister, password
    }
}

export const useLoginDetailsHook = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const dispatch = useDispatch()


    const { loginUser } = useAuth()

    const onSubmitLogin = async (data) => {

        const user = await loginUser(data)



        dispatch(addUser(user.isUserExists))
        dispatch(addAccessToken(user.accessToken));
        toast(user.message);
        navigate("/home")
        reset()
    };

    return {
        showPassword, setShowPassword, navigate, register, handleSubmit, errors, onSubmitLogin
    }
}

export const useHandleCurrentUserData = () => {

    const { getCurrentuser } = useAuth()
    const dispatch = useDispatch()

    let userData = async () => {
        try {

            const data = await getCurrentuser();


            dispatch(addUser(data.data))

        } catch (error) {
            console.log(error)
        }
        finally {
            dispatch(addLoading(false))
        }

    }



    return { userData }
}