// 3) შექმენით products router სადაც იქნება GET /products და POST /products routes. GET route-მა უნდა დააბრუნოს პროდუქტების სია, ხოლო POST route-მა ახალი პროდუქტის დამატების მესიჯი. ბოლოს router დააკავშირეთ მთავარ app.js ფაილთან

const express = require("express");
const app = express();

const productsRouter = require("./products");

app.use(express.json());

app.use("/", productsRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

// GET /products - აბრუნებს პროდუქტების სიას.

// POST /products - ამატებს ახალ პროდუქტს
// (ამ მაგალითში მხოლოდ შეტყობინებას აბრუნებს).

// app.use() აკავშირებს router-ს მთავარ Express აპლიკაციასთან.