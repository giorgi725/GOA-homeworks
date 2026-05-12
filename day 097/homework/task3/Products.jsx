import { Link, Outlet } from "react-router-dom";

function Products() {
    return (
        <div>
            <h1>Products Page</h1>
            <nav>
                <Link to="/products">Product List</Link>
                <br />
                <Link to="/products/1">Product 1</Link>
                <br />
                <Link to="/products/2">Product 2</Link>
                <br />
                <Link to="/products/exotic">Exotic</Link>
            </nav>
            <hr />
            <Outlet />
        </div>
    );
}

export default Products;