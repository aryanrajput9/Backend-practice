import { useForm } from "react-hook-form";
import { useAdminApi } from "../adminApi/adminApi";
import { useDispatch } from "react-redux";
import { setAccesstoken, setAdmin, setisLoading } from "../state/adminState";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export const useAdminHook = () => {


    const { registerApi, loginApi, getAdmin } = useAdminApi();
    const dispatch = useDispatch();
    const navigate = useNavigate()

    // Admin Register Hook
    const useAdminRegisterHook = () => {

        // React Hook Form
        const {
            register,
            handleSubmit,
            reset,
            watch,
            formState: { errors }
        } = useForm();

        // Register Form Submit
        const registerOnSubmit = async (data) => {

            const adminData = await registerApi(data);
            dispatch(setAdmin(adminData.admin));
            toast(adminData.message)
            reset();
        };

        return {
            register,
            handleSubmit,
            reset,
            watch,
            errors,
            registerOnSubmit,
        };
    };

    // Admin Login Hook
    const useAdminLoginHook = () => {

        // React Hook Form
        const {
            register,
            handleSubmit,
            reset,
            watch,
            formState: { errors }
        } = useForm();

        // Login Form Submit
        const loginOnSubmit = async (data) => {

            const adminData = await loginApi(data);

            dispatch(setAdmin(adminData.admin));
            dispatch(setAccesstoken(adminData.accessToken));
            toast(adminData.message)

            navigate("/dashboard/adminpanel")


            reset();
        };

        return {
            register,
            handleSubmit,
            reset,
            watch,
            errors,
            loginOnSubmit,
        };


    };

    const handleCurrentAdmin = async () => {
        try {
            const data = await getAdmin();

            dispatch(setAdmin(data.admin))
        } catch (error) {
            console.log(error)
        }
        finally {
            dispatch(setisLoading(false))
        }
    }

    // Export Hooks
    return {
        useAdminRegisterHook,
        useAdminLoginHook,
        handleCurrentAdmin
    };
};