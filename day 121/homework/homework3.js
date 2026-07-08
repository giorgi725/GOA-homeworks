// 4) შექმენით Express project და დაწერეთ authorization middleware. თუ req.query.user === "Luka", middleware-მა უნდა გამოიძახოს next(), წინააღმდეგ შემთხვევაში დაბეჭდოს "Access denied". შექმენით GET / და GET /profile routes. კომენტარებში ახსენით next() ფუნქციის დანიშნულება

const express = require("express");
const app = express();


function authorization(req, res, next) {
    if (req.query.user === "Luka") {
        next(); 
    } else {
        res.send("Access denied");
    }
}

app.use(authorization);

app.get("/", (req, res) => {
    res.send("Welcome Home");
});

app.get("/profile", (req, res) => {
    res.send("Welcome to Profile");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

/*

next() ფუნქციის დანიშნულება:

next() Express-ის სპეციალური ფუნქციაა, რომელიც
მიმდინარე middleware-ის დასრულების შემდეგ
მართვას გადასცემს შემდეგ middleware-ს ან route handler-ს.

თუ next() არ გამოვიძახეთ და response არ გავაგზავნეთ,
request "გაიჭედება" და კლიენტი პასუხს ვერ მიიღებს.

authorization middleware-ში next() იძახება მხოლოდ მაშინ,
როდესაც req.query.user === "Luka", ამიტომ მხოლოდ ამ
შემთხვევაში გადადის მოთხოვნა შესაბამის route-ზე.
*/