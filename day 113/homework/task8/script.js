// 9) დაწერეთ პროგრამა, სადაც:
// გამოიყენებთ PUT /products/:id/discount

// body-დან მიიღებთ percent-ს

// იპოვეთ პროდუქტი id-ით

// დააკელით price-ს percent პროცენტი

// დააბრუნეთ განახლებული პროდუქტი

const express = require("express");

const app = express();
app.use(express.json());

const products = [
    { id: 1, title: "iPhone", price: 1000 },
    { id: 2, title: "Samsung", price: 900 },
    { id: 3, title: "MacBook", price: 1500 }
];

app.put("/products/:id/discount", (req, res) => {
    const id = Number(req.params.id);
    const { percent } = req.body;
    const product = products.find(product => product.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }
    product.price = product.price - (product.price * percent / 100);
    res.status(200).json(product);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});