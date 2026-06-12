// 5) შექმენით Express project და დაწერეთ DELETE /products route.

// - წაშალეთ products მასივიდან ბოლო პროდუქტი
// - თუ პროდუქტი წაიშალა, დააბრუნეთ შეტყობინება "Product Deleted"
// - თუ მასივი ცარიელია, დააბრუნეთ შეტყობინება "No Products Found"

const express = require('express');

const app = express();

const products = [
    { id: 1, title: 'Laptop', price: 2500 },
    { id: 2, title: 'Phone', price: 1500 }
];

app.delete('/products', (req, res) => {
    if (products.length === 0) {
        return res.status(404).json({
            message: 'No Products Found'
        });
    }
    products.pop();

    res.json({
        message: 'Product Deleted'
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});