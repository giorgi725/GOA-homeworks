import { NavLink } from "react-router";
import useAuth from "../context/AuthContext";

function Navbar () {
    const {user} = useAuth();

    if (!user) {
        return (
            <ul>
                <li><button> <NavLink to="/">Home</NavLink> </button></li>
                <li><button> <NavLink to="/register">Register</NavLink> </button></li>
                <li><button> <NavLink to="/login">Login</NavLink> </button></li>
            </ul>
        )
    }

    return (
        <ul>
            <li><button> <NavLink to="/">Home</NavLink> </button></li>
            <li><button> <NavLink to="/profile">Profile</NavLink> </button></li>
            <li><button> <NavLink to="/feed">Feed</NavLink> </button></li>
        </ul>
    )
}
export default Navbar;