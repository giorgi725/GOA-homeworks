import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Products from "./Products";
import ProductList from "./ProductList";
import Product from "./Product";
import Exotic from "./Exotic";

function App() {
    return (
        <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />}>
            
            {/*
                index route ნიშნავს default child route-ს.
                ანუ როცა user შევა /products-ზე,
                ავტომატურად ProductList გამოჩნდება.
            */}
            <Route index element={<ProductList />} />

            <Route path=":id" element={<Product />} />

            <Route path="exotic" element={<Exotic />} />
            </Route>
        </Routes>
        </>
    );
}

export default App;