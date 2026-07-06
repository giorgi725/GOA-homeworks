// 6) შექმენით shop router სადაც იქნება GET /shop/items, POST /shop/items და PUT /shop/items/:id routes. GET route-მა უნდა დააბრუნოს ყველა item, POST route-მა ახალი item-ის დამატების მესიჯი, ხოლო PUT route-მა კონკრეტული item-ის განახლების მესიჯი id-ის მიხედვით

const express = require("express");
const app = express();

const shopRouter = require("./shop");

app.use(express.json());

app.use("/", shopRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

კომენტარები

// GET /shop/items - აბრუნებს ყველა item-ს

// POST /shop/items - ამატებს ახალ item-ს
// (ამ მაგალითში მხოლოდ შეტყობინებას აბრუნებს)

// PUT /shop/items/:id - ანახლებს კონკრეტულ item-ს id-ის მიხედვით