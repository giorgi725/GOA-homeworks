// 7) დაწერეთ პროგრამა, სადაც:
// გამოიყენებთ GET /products/search

// query-დან მიიღებთ keyword-ს

// დააბრუნეთ პროდუქტები, რომლის title შეიცავს keyword-ს

// თუ keyword არ არის, დააბრუნეთ ყველა პროდუქტი

const express = require("express");

const app = express();

const products = [
    { id: 1, title: "iPhone 15", price: 1200 },
    { id: 2, title: "Samsung Galaxy", price: 1000 },
    { id: 3, title: "MacBook Air", price: 1500 },
    { id: 4, title: "Lenovo ThinkPad", price: 1300 }
];

app.get("/products/search", (req, res) => {
    const { keyword } = req.query;
    if (!keyword) {
        return res.json(products);
    }

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(keyword.toLowerCase())
    );

    res.json(filteredProducts);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});