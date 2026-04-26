import React, { useEffect, useState } from "react";

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [account, setAccount] = useState([]);
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user") || null);
        const storedAccount = JSON.parse(localStorage.getItem("account") || "[]");
    }, []);
    const register = (username, passwrord) => {
        const newUser = { username, passwrord };
        const updated = [...account, newUser];
        localStorage.setItem("user", JSON.stringify(newUser));
        localStorage.setItem("account", JSON.stringify(updated));
    };
    const login = (username, passwrord) => {
        const accountfound = account.find(
        (acc) =>
            acc.username === username && acc.passwrord === passwrord
        );
        if (accountfound) {
        setUser(accountfound);
        localStorage.setItem("user", JSON.stringify(accountfound));
    }
    };
    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };
    return { user, register, login, logout };
    };
    const useProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const storedproduct = JSON.parse(localStorage.getItem("products") || "[]");
        setProducts(storedproduct);
    }, []);
    const addproduct = ({ product, price }) => {
        const updated = [...products, { product, price }];
        setProducts(updated);
        localStorage.setItem("products", JSON.stringify(updated));
    };
    return { products, addproduct };
    };
    const registration = ({ register }) => {
    const [username, setUsername] = useState("");
    const [passwrord, setpassword] = useState("");
    const handleregister = (e) => {
        e.preventDefault();
        register(username, passwrord);
    };
    return (
        <form onSubmit={handleregister}>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username} required />
            <input type="password" placeholder="Password" onChange={(e) => setpassword(e.target.value)} value={passwrord} required />
            <button type="submit">register</button>
        </form>
    );
    };
    const login = ({ login }) => {
    const [username, setUsername] = useState("");
    const [passwrord, setpassword] = useState("");
    const handlelogin = (e) => {
        e.preventDefault();
        login(username, passwrord);
    };
    return (
        <form onSubmit={handlelogin}>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username} required />
            <input type="password" placeholder="Password" onChange={(e) => setpassword(e.target.value)} value={passwrord} required />
            <button type="submit">Log in</button>
        </form>
    );
    };
    const adminpanel = ({ logout, products, addproduct }) => {
    const [product, setProduct] = useState("");
    const [price, setPrice] = useState("");
    const handlesubmit = (e) => {
        e.preventDefault();
        addproduct({ product, price });
        setProduct("");
        setPrice("");
    };
    return (
        <div>
        <h2>Admin panel</h2>
        <button onClick={logout}>logout</button>
        <form onSubmit={handlesubmit}>
            <input type="text" placeholder="product" value={product} onChange={(e) => setProduct(e.target.value)} required />
            <input type="text" placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
            <button type="submit">add product</button>
        </form>
        <table border={1}>
            <thead>
            <tr>
                <th>product name</th>
                <th>product price</th>
            </tr>
            </thead>
            <tbody>
            {products.map((product, index) => (
                <tr key={index}>
                <td>{product.product}</td>
                <td>{product.price}$</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
    };
export default function form() {
    const { user, register, login, logout } = useAuth();
    const { products, addproduct } = useProduct();
    return (
        <>
        {!user ? (
            <div>
            <h1>registration</h1>
            <register />
            <h2>login</h2>
            <login />
            </div>
        ) : (
            <adminpanel />
        )}
        </>
    );
}