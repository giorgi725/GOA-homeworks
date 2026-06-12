// 3) შექმენით Express project და დაწერეთ POST /products route.

// - req.body-დან მიიღეთ title და price
// - შექმენით ახალი პროდუქტის ობიექტი
// - მიანიჭეთ id (Date.now())
// - დაამატეთ products მასივში
// - დააბრუნეთ status 201 და დამატებული პროდუქტი

const express = require('express');

const app = express();
app.use(express.json());

const products = [];

app.post('/products', (req, res) => {
    const { title, price } = req.body;

    const newProduct = {
        id: Date.now(),
        title,
        price
    };

    products.push(newProduct);

    res.status(201).json(newProduct);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});