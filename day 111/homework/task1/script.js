// 2) შექმენით Express project და დაწერეთ GET /home route.

// - route-მა უნდა დააბრუნოს JSON პასუხი:
// {
//     "message": "Welcome Home"
// }

const express = require('express');

const app = express();

app.get('/home', (req, res) => {
    res.json({
        message: 'Welcome Home'
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});