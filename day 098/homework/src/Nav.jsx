import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

function Nav() {
    const { isAuth, logout } = useAuth();

    return (
        <nav>
        {/*
            Link ვიყენებთ <a>-ის ნაცვლად,
            რადგან Link route-ს ცვლის
            page reload-ის გარეშე.
        */}

        <Link to="/">Home</Link>

        <br />
        <br />

        <Link to="/search">Search</Link>

        <br />
        <br />

        <Link to="/register">Register</Link>

        <br />
        <br />

        <Link to="/login">Login</Link>

        <br />
        <br />

        <Link to="/panel">Admin Panel</Link>

        <br />
        <br />

        {isAuth && (
            <button onClick={logout}>
            Logout
            </button>
        )}

        <hr />
        </nav>
    );
}

export default Nav;