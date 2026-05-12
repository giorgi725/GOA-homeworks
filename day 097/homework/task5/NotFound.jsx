import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div>
        <h1>404 - Page Not Found</h1>

        <p>This page does not exist.</p>

        {/* მთავარი გვერდისკენ დაბრუნება */}
        <Link to="/">Go Back Home</Link>

        {/*
            თუ "*" route არ გვექნება,
            არარსებულ URL-ზე არაფერი გამოჩნდება
            ან ცარიელი გვერდი იქნება.
        */}
        </div>
    );
}

export default NotFound;