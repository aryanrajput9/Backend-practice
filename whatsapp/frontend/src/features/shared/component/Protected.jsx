import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

function Protected() {
    const user = useSelector((state) => state.auth.user);

    const loading = useSelector((state) => state.auth.isLoading);

    if (loading) {
        return <h2>loading....</h2>
    }

    if (!user) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}

export default Protected;