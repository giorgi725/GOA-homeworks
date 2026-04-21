// 2) ახსენთ რას ნიშნავს controlled და uncontrolled კომპონენტები

// Controlled კომპონენტში მონაცემს მართავს React-ის state.
// input-ის მნიშვნელობა (value) მოდის state-დან და იცვლება onChange-ის საშუალებით.

// Uncontrolled კომპონენტში მონაცემს მართავს პირდაპირ DOM (არა React state).
// მნიშვნელობის წასაღებად ვიყენებთ ref-ს.

// 3) App.jsx-ში შექმენით ფორმა ორი input-ით:
// - username (uncontrolled)
// - password (controlled)
// password-ისთვის გამოიყენეთ useState.
// კომენტარებში დაწერეთ რომელი input არის controlled და რომელი uncontrolled და რატომ

import { useRef, useState } from "react";

export default function App() {
    const [password, setPassword] = useState("");

    const usernameRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = usernameRef.current.value;
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={usernameRef} /> // uncontrolled
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> //controlled
            <button type="submit">Submit</button>
        </form>
    );
};

// 4) შექმენით PasswordCheck კომპონენტი, რომელიც მიიღებს props-ით password მნიშვნელობას.
// თუ პაროლის სიგრძე ნაკლებია 8-ზე, გამოიტანეთ <p> ტექსტი: "Password must contain 8 characters".
// კომენტარებში ახსენით რატომ არის ამ შემთხვევაში password controlled input

export default function PasswordCheck({ password }) {
    return (
        <>
            {password.length < 8 && (
                <p>password must contain 8 characters</p>
            )}
        </>
    )
}

// 5) შექმენით LoginForm კომპონენტი, სადაც:
// - username იქნება uncontrolled input
// - password იქნება controlled input
// password-ის ცვლილებაზე მოახდინეთ ვალიდაცია useEffect-ის გამოყენებით.
// კომენტარებში ახსენით რატომ ჯობს პაროლის კონტროლი state-ით

export default function LoginForm() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const usernameRef = useRef();

    useEffect(() => {
        if (password.length === 0) {
        setError("");
        } else if (password.length < 8) {
        setError("Password must be at least 8 characters");
        } else {
        setError("Password is valid");
        }
    }, [password]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const username = usernameRef.current.value;
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" ref={usernameRef} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    );
}

