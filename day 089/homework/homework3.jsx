import { useState, useEffect } from "react";

function useForm(initialValues, onSubmit) {
    const [formData, setFormData] = useState(initialValues);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };
    return { formData, handleChange, handleSubmit };
    }
    function useAuth() {
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem("currentUser");
        return saved ? JSON.parse(saved) : null;
    });
    const register = ({ email, password }) => {
        const newUser = { email, password };
        localStorage.setItem("user", JSON.stringify(newUser));
        alert("Registered successfully");
    };
    const login = ({ email, password }) => {
        const saved = JSON.parse(localStorage.getItem("user"));
        if (!saved) {
        alert("No user found");
        return;
        }
        if (saved.email === email && saved.password === password) {
        setUser(saved);
        localStorage.setItem("currentUser", JSON.stringify(saved));
        } else {
        alert("Invalid credentials");
        }
    }
    const logout = () => {
        setUser(null);
        localStorage.removeItem("currentUser");
    };
    return { user, register, login, logout };
    }
    function Register({ onRegister }) {
    const { formData, handleChange, handleSubmit } = useForm(
        { email: "", password: "" },
        onRegister
    );
    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <input type="password"name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
            <button type="submit">Register</button>
        </form>
    );
    }
    function Login({ onLogin }) {
    const { formData, handleChange, handleSubmit } = useForm(
        { email: "", password: "" },
        onLogin
    );
    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}/>
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
            <button type="submit">Login</button>
        </form>
    );
    }
    export default function App() {
    const { user, register, login, logout } = useAuth();
    const [view, setView] = useState("login");
    return (
        <div style={{ padding: "20px" }}>
        {user ? (
            <>
            <h2>Welcome, {user.email}</h2>
            <button onClick={logout}>Logout</button>
            </>
        ) : (
            <>
            <div style={{ marginBottom: "10px" }}>
                <button onClick={() => setView("login")}>Login</button>
                <button onClick={() => setView("register")}>Register</button>
            </div>
            {view === "login" ? (
                <Login onLogin={login} />
            ) : (
                <Register onRegister={register} />
            )}
            </>
        )}
        </div>
    );
}
