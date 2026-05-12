import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Products from "./Products";
import ProductList from "./ProductList";
import Product from "./Product";
import Exotic from "./Exotic";
import NotFound from "./NotFound";

function App() {
    return (
        <>
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/products" element={<Products />}>
            <Route index element={<ProductList />} />
            <Route path=":id" element={<Product />} />
            <Route path="exotic" element={<Exotic />} />
            </Route>

            {/*
            wildcard route (*) საჭიროა,
            რომ არარსებული გვერდები დავიჭიროთ.
            */}
            <Route path="*" element={<NotFound />} />
        </Routes>
        </>
    );
}

export default App;