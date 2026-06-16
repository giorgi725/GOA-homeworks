// 3) დაწერეთ პროგრამა, სადაც:
// გამოიყენებთ GET /products/:id

// id მიიღეთ req.params-დან

// თუ პროდუქტი მოიძებნა, დააბრუნეთ ის

// თუ არ მოიძებნა, დააბრუნეთ 404 და message

const express = require("express")

const app = express()
const products = [
    { id: 1, name: "iPhone", category: "phone" },
    { id: 2, name: "Samsung", category: "phone" },
    { id: 3, name: "Lenovo", category: "laptop" },
    { id: 4, name: "MacBook", category: "laptop" }
];

app.get("/products/:id", (req, res) => {
    const id = Number(req.params.id);
    const product = products.find(product => product.id === id);
    if (product) {
        return res.status(200).json(product);
    }

    res.status(404).json({
        message: "Product not found"
    });
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});