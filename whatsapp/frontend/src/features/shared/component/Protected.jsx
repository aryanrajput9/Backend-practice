import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

function Protected() {
    const user = useSelector((state) => state.auth.user);
    console.log(user)
    if (!user) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}

export default Protected;