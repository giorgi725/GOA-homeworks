// 2) დაწერეთ პროგრამა, სადაც:
// გამოიყენებთ GET /products

// query-დან მიიღებთ category-ს

// თუ category არის მოცემული, დააბრუნეთ მხოლოდ იმ კატეგორიის პროდუქტები

// თუ არ არის მოცემული, დააბრუნეთ ყველა პროდუქტი


const express = require("express");
const app = express();

const products = [
    { id: 1, name: "iPhone", category: "phone" },
    { id: 2, name: "Samsung", category: "phone" },
    { id: 3, name: "Lenovo", category: "laptop" },
    { id: 4, name: "MacBook", category: "laptop" }
];

app.get("/products", (req, res) => {
    const { category } = req.query;
    if (category) {
        const filteredProducts = products.filter(
            product => product.category === category
        );
        return res.json(filteredProducts);
    }
    res.json(products);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});