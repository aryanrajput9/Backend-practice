import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

function ProtectedRoute() {

    const { user } = useSelector(
        state => state.auth
    );

    if (!user) {
        return <Navigate to="/" />
    }

    return <Outlet />
}

export default ProtectedRoute;