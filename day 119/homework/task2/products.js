// 3) შექმენით products router სადაც იქნება GET /products და POST /products routes. GET route-მა უნდა დააბრუნოს პროდუქტების სია, ხოლო POST route-მა ახალი პროდუქტის დამატების მესიჯი. ბოლოს router დააკავშირეთ მთავარ app.js ფაილთან

const express = require("express"); 
const router = express.Router(); 

const products = [ 
    { id: 1, name: "Laptop" }, 
    { id: 2, name: "Phone" }, 
    { id: 3, name: "Headphones" } 
]; 

router.get("/products", (req, res) => {
    res.json(products);
})

router.post("/products", (req, res) => {
    res.send("New product added"); 
});

module.exports = router;