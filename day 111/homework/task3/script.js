// 4) შექმენით Express project და დაწერეთ PUT /products route.

// - req.body-დან მიიღეთ ახალი title
// - შეცვალეთ მასივში პირველი პროდუქტის title
// - დააბრუნეთ განახლებული პროდუქტი
// - თუ პროდუქტი არ არსებობს, დააბრუნეთ შესაბამისი შეტყობინება

const express = require('express');

const app = express();
app.use(express.json());

const products = [
    {
        id: 1,
        title: 'Laptop',
        price: 2500
    }
];

app.put('/products', (req, res) => {
    const { title } = req.body;

    if (products.length === 0) {
        return res.status(404).json({
            message: 'Product not found'
        });
    }

    products[0].title = title;

    res.json(products[0]);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});