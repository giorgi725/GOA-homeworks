// 2) შექმენით express project და router ფაილი users.js. Router-ში დაამატეთ GET /users route რომელიც დააბრუნებს "All Users". შემდეგ app.js-ში გამოიყენეთ app.use() რათა router დაუკავშიროთ მთავარ server-ს. კომენტარებში ახსენით რას აკეთებს express.Router() და app.use()

const express = require("express");

const router = express.Router();

router.get("/users", (req, res) => {
    res.send("All Users");
});

module.exports = router;

// express.Router() გამოიყენება მარშრუტების (routes) ცალკე ფაილებში
// დასაჯგუფებლად და სამართავად, რათა კოდი უფრო მოწესრიგებული იყოს.

// app.use() გამოიყენება middleware-ის ან router-ის დასაკავშირებლად
// მთავარ Express აპლიკაციასთან.