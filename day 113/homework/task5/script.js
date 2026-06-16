// 6) დაწერეთ პროგრამა, სადაც:
// გამოიყენებთ DELETE /products/:id

// id-ის მიხედვით წაშალეთ პროდუქტი

// თუ არსებობს, დააბრუნეთ განახლებული სია

// თუ არ არსებობს, დააბრუნეთ 404 და message


const express = require("express");

const app = express();
app.use(express.json());

const products = [
    { id: 1, title: "iPhone", price: 1000 },
    { id: 2, title: "Samsung", price: 900 },
    { id: 3, title: "MacBook", price: 1500 }
];

app.delete("/products/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = products.findIndex(product => product.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Product not found"
        });
    }
    products.splice(index, 1);
    res.status(200).json(products);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});