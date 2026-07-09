import { Navigate, Outlet } from "react-router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import useAuthHook from "../features/auth/hook/auth.Hook";

function ProtectedRoute() {
    const { handleCurrentUser } = useAuthHook();

    const { user, isLoading } = useSelector((state) => state.auth);

    useEffect(() => {
        handleCurrentUser();
    }, []);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (!user) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}

export default ProtectedRoute;