// components/ProtectedRoute.jsx

import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function ProtectedRoute({ children }) {
    const { isAuth } = useAuth();

    /*
        ProtectedRoute იცავს route-ს.

        თუ user არ არის login →
        Navigate გადაამისამართებს /login-ზე
    */
    if (!isAuth) {
        return <Navigate to="/login" />;
    }
    return children;
}

export default ProtectedRoute;