// 2) შექმენით Express project და დაწერეთ middlewareLogger ფუნქცია. Middleware-მა ყოველი request-ის დროს უნდა დაბეჭდოს "Request received". შემდეგ შექმენით GET / და GET /users routes. გამოიყენეთ app.use() middleware-ის დასაკავშირებლად. კომენტარებში ახსენით რას აკეთებს middleware და რატომ გამოიყენება DRY პრინციპისთვის

const express = require("express");
const app = express();

function middlewareLogger(req, res, next) {
    console.log("Request received");
    next(); // გადასცემს მართვას შემდეგ middleware-ს ან route-ს
}

app.use(middlewareLogger);

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/users", (req, res) => {
    res.send("Users Page");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

/*
Middleware არის ფუნქცია, რომელიც request-სა და response-ს შორის მუშაობს.
მას შეუძლია მონაცემების შემოწმება, ლოგების დაბეჭდვა, ავტორიზაცია და სხვა მოქმედებების შესრულება.

DRY (Don't Repeat Yourself) პრინციპისთვის middleware გამოიყენება იმიტომ, რომ
ერთსა და იმავე კოდს ყველა route-ში აღარ ვწერთ ცალ-ცალკე.
მაგალითად, "Request received" ლოგის დასაბეჭდად კოდი ერთხელ middleware-ში დავწერეთ
და ის ავტომატურად გაეშვება ყველა request-ის დროს.
*/