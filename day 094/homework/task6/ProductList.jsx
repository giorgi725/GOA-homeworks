import { useState, useMemo } from "react";
import Product from "./Product";

export default function ProductList() {
    const productsData = [
        { id: 1, name: "Laptop", price: 1500, category: "Electronics" },
        { id: 2, name: "Phone", price: 800, category: "Electronics" },
        { id: 3, name: "Chair", price: 120, category: "Furniture" },
        { id: 4, name: "Table", price: 300, category: "Furniture" },
        { id: 5, name: "T-Shirt", price: 25, category: "Clothing" },
        { id: 6, name: "Jeans", price: 60, category: "Clothing" },
    ];

    const categories = ["All", "Electronics", "Furniture", "Clothing"];

    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProducts = useMemo(() => {
        console.log("Filtering products...");

        if (selectedCategory === "All") {
        return productsData;
        }

        return productsData.filter(
        (product) => product.category === selectedCategory
        );
    }, [selectedCategory]);

    return (
        <div>
        <h2>Product List</h2>

        <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
        >
            {categories.map((cat, index) => (
            <option key={index} value={cat}>
                {cat}
            </option>
            ))}
        </select>

        <hr />

        {filteredProducts.map((product) => (
            <Product
            key={product.id}
            name={product.name}
            price={product.price}
            category={product.category}
            />
        ))}
        </div>
    );
}