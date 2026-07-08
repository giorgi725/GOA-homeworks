// 7) შექმენით Express project და შექმენით Middleware Stack. პირველი middleware უნდა ბეჭდავდეს "Authentication", მეორე "Loading user data", ხოლო მესამე route handler-მა უნდა დააბრუნოს "Dashboard". გამოიყენეთ ისინი GET /dashboard route-ზე. კომენტარებში ახსენით Middleware Stack-ის მუშაობის პრინციპი

const express = require("express");
const app = express();

function authentication(req, res, next) {
    console.log("Authentication");
    next();
}

function loadUserData(req, res, next) {
    console.log("Loading user data");
    next();
}

app.get(
    "/dashboard",
    authentication,
    loadUserData,
    (req, res) => {
        res.send("Dashboard");
    }
);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
