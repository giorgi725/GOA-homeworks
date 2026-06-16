// 4) დაწერეთ პროგრამა, სადაც:
// გამოიყენებთ POST /products

// body-დან მიიღებთ title და price-ს

// თუ რომელიმე აკლია, დააბრუნეთ error message

// თუ სწორია, დაამატეთ პროდუქტი და დააბრუნეთ სია


const express = require("express")

const app = express()

app.use(express.json());

const products = [
    { id: 1, title: "iPhone", price: 1000 },
    { id: 2, title: "Samsung", price: 900 }
];

app.post("/products", (req, res) => {
    const { title, price } = req.body;
    if (!title || !price) {
        return res.status(400).json({
            message: "title and price are required"
        });
    }
    const newProduct = {
        id: products.length + 1,
        title,
        price
    };
    products.push(newProduct);
    res.status(201).json(products);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});