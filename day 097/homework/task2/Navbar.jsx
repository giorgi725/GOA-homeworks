import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav>
        {/* 
            ჩვეულებრივ <a> ტეგს არ ვიყენებთ,
            რადგან ის მთლიან გვერდს არეფრეშებს.
            React Router-ის Link კომპონენტი
            გვერდის გადატვირთვის გარეშე
            ცვლის route-ს.
        */}
        {/* 
            განსხვავება:
            <a> - აკეთებს full page reload-ს
            Link - SPA navigation (reload-ის გარეშე)
        */}
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <hr />
        <NavLink>Home</NavLink>
        {" | "}
        <NavLink>About</NavLink>
        <NavLink>Contact</NavLink>
        </nav>
    );
}

export default Navbar;