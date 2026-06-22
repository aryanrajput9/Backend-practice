import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import AuthApi from "./Auth.api";


export const RegisterHook = () => {
    const navigate = useNavigate();

    const { useRegister } = AuthApi()
    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();

    const RegisterHandle = (data) => {

        useRegister(data)

        reset()
    }

    return {
        navigate, register, handleSubmit, errors, watch, RegisterHandle
    }
}

export const LoginHook = () => {
    const navigate = useNavigate();

    const { useLogin } = AuthApi(); // 👈 yahan

    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();

    const LoginHandle = (data) => {
        useLogin(data);

        reset();
    };

    return {
        navigate,
        register,
        handleSubmit,
        errors,
        watch,
        LoginHandle
    };
};