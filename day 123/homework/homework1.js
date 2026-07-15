// 2) შექმენით Express server და users მასივი. server-ზე უნდა იყოს routes: /, /users/:userId (get, delete). თქვენი ამოცანაა შექმნათ app.param() middleware, რომელიც userId პარამეტრით იპოვის შესაბამის user-ს და შეინახავს req.user-ში. თუ user არ არსებობს დააბრუნეთ 404.

// let users = [
//     {id: 101, username: "andria", age: 18},
//     {id: 102, username: "nika", age: 20},
//     {id: 103, username: "luka", age: 19},
//     {id: 104, username: "saba", age: 21},
// ]

const express = require("express");
const app = express();

app.use(express.json());

let users = [
    { id: 101, username: "andria", age: 18 },
    { id: 102, username: "nika", age: 20 },
    { id: 103, username: "luka", age: 19 },
    { id: 104, username: "saba", age: 21 },
];

app.param("userId", (req, res, next, userId) => {
    const user = users.find(u => u.id === Number(userId));

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    req.user = user;
    next();
});

app.get("/", (req, res) => {
    res.send("Welcome to Users Server");
});
app.get("/users/:userId", (req, res) => {
    res.status(200).json(req.user);
});

app.delete("/users/:userId", (req, res) => {
    users = users.filter(
        user => user.id !== req.user.id
    );

    res.status(200).json({
        message: "User deleted successfully",
        deletedUser: req.user
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});