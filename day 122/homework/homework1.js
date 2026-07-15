// 2) შექმენით Express project ონლაინ მაღაზიის თემაზე. შექმენით products array. დაამატეთ GET /products, GET /products/:id და DELETE /products/:id routes. თუ მოთხოვნილი პროდუქტი არ არსებობს, გამოიძახეთ next(new Error("Product not found")). შექმენით Global Error Handler Middleware, რომელიც დააბრუნებს შესაბამის status code-ს და JSON პასუხს { message: err.message }. კომენტარებში ახსენით რა ხდება next(error)-ის გამოძახების შემდეგ და როგორ გადადის კონტროლი Error Handler Middleware-ში

const express = require("express");
const app = express();

app.use(express.json());

let products = [
    { id: 1, name: "Laptop", price: 2500 },
    { id: 2, name: "Phone", price: 1200 },
    { id: 3, name: "Keyboard", price: 150 },
    { id: 4, name: "Mouse", price: 80 }
];

app.get("/products", (req, res) => {
    res.status(200).json(products);
});

app.get("/products/:id", (req, res, next) => {
    const product = products.find(p => p.id === Number(req.params.id))
    if (!product) {
        return next(new Error("Product not found"));
    }
    res.status(200).json(product);
});

app.delete("/products/:id", (req, res, next) => {
    const productIndex = products.findIndex(p => p.id === Number(req.params.id))

    if (productIndex === -1) {
        return next(new Error("Product not found"));
    }

    const deletedProduct = products.splice(productIndex, 1);
    res.status(200).json({
        message: "Product deleted successfully",
        deletedProduct
    });
});

app.use((err, req, res, next) => {
    res.status(404).json({
        message: err.message
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});