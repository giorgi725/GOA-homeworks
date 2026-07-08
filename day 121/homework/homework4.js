// 5) შექმენით Express project და დაწერეთ middleware, რომელიც req ობიექტს დაამატებს username property-ს მნიშვნელობით "Luka". შემდეგ შექმენით GET /profile route, რომელიც response-ში გამოიტანს req.username-ს. კომენტარებში ახსენით როგორ შეიძლება middleware-მა request object შეცვალოს

const express = require("express");
const app = express();

function addUsername(req, res, next) {
    req.username = "Luka";
    next();
}

app.use(addUsername);

app.get("/profile", (req, res) => {
    res.send(`Username: ${req.username}`);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

/*

როგორ ცვლის middleware request object-ს?

req (request) ობიექტი ჩვეულებრივი JavaScript ობიექტია.
Middleware-ს შეუძლია მას ახალი properties დაამატოს,
არსებული შეცვალოს ან წაიკითხოს.

მაგალითად:

req.username = "Luka";

ამის შემდეგ ყველა შემდეგ middleware-სა და route-ს
შეუძლია გამოიყენოს req.username.

ეს ხშირად გამოიყენება:
- ავტორიზაციისთვის (req.user)
- მომხმარებლის მონაცემების შესანახად
- ლოგირებისთვის
- request-ის დამატებითი ინფორმაციის გადასაცემად

ამ მაგალითში middleware-მ req ობიექტს დაამატა
username property და შემდეგ /profile route-მა
მისი მნიშვნელობა response-ში გამოიტანა.
*/