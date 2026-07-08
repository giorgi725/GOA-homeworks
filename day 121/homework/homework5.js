// 6) შექმენით Express project და გამოიყენეთ Route-Level Middleware მხოლოდ /admin route-ისთვის. Middleware-მა უნდა შეამოწმოს req.query.admin === "true". თუ პირობა შესრულდება გამოიძახოს next(), წინააღმდეგ შემთხვევაში დააბრუნოს "No access". კომენტარებში ახსენით Route-Level Middleware-ის უპირატესობა

const express = require("express");
const app = express();

function checkAdmin(req, res, next) {
    if (req.query.admin === "true") {
        next();
    } else {
        res.send("No access");
    }
}

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/admin", checkAdmin, (req, res) => {
    res.send("Welcome Admin");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

/*

Route-Level Middleware-ის უპირატესობა:

Route-Level Middleware გამოიყენება მხოლოდ კონკრეტულ
route-ზე და არა მთელ აპლიკაციაზე.

უპირატესობები:
1. უკეთესი წარმადობა (Performance) -
   middleware გაეშვება მხოლოდ საჭირო route-ებზე.

2. კოდის ორგანიზება -
   კონკრეტული ლოგიკა დაკავშირებულია მხოლოდ იმ route-თან,
   რომელსაც ეხება.

3. მეტი კონტროლი -
   სხვადასხვა route-ს შეიძლება ჰქონდეს განსხვავებული
   middleware-ები.


*/