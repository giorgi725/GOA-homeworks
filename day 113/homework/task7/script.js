// 8) დაწერეთ პროგრამა, სადაც:
// გამოიყენებთ GET /products/sort

// query-დან მიიღებთ sort-ს

// თუ sort არის asc, დაალაგეთ price-ის ზრდადობით

// თუ sort არის desc, დაალაგეთ კლებადობით

const express = require("express");

const app = express();

const products = [
    { id: 1, title: "iPhone", price: 1200 },
    { id: 2, title: "Samsung", price: 900 },
    { id: 3, title: "MacBook", price: 1500 },
    { id: 4, title: "Lenovo", price: 1100 }
];

app.get("/products/sort", (req, res) => {
    const { sort } = req.query;
    let sortedProducts = [...products];

    if (sort === "asc") {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sort === "desc") {
        sortedProducts.sort((a, b) => b.price - a.price);
    }
    res.json(sortedProducts);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});