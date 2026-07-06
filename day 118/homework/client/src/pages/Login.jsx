import { useEffect } from "react";
import useAuth from "../context/authContext";

export default function Login () {
    const { user, login } = useAuth()


    const handleLogin = (e) => {
        e.preventDefault();

        const account = {
            username: e.target.username.value,
            password: e.target.password.value
        }
        
        login(account)
    }

    return (
        <form onSubmit={handleLogin}>
            <input type="text" placeholder="Username" name="username" required />
            <br />
            <input type="password" placeholder="Password" name="password" required />
            <br />
            <button>Login</button>
        </form>
    )
}