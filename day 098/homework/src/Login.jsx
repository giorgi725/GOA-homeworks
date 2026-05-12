import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
    const { login } = useAuth();

    const navigate = useNavigate();

    const handleLogin = () => {
        login();

        navigate("/panel");
    };

    return (
        <div>
        <h1>Login</h1>

        <button onClick={handleLogin}>
            Login
        </button>
        </div>
    );
}

export default Login;