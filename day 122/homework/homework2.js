// 3) შექმენით Express project მომხმარებლების მართვის სისტემის თემაზე. შექმენით users array. დაამატეთ GET /users, POST /users და PUT /users/:id routes. POST და PUT routes-ში შეამოწმეთ რომ მომხმარებელს ჰქონდეს name და email ველები. თუ რომელიმე აკლია, გამოიძახეთ next(new Error("Missing required fields")). შექმენით Error Handler Middleware, რომელიც ყველა error-ს ერთ ადგილას დაამუშავებს და JSON ფორმატში დააბრუნებს. კომენტარებში ახსენით რატომ უნდა იყოს Error Handler Middleware ყველა route-ისა და middleware-ის შემდეგ მოთავსებული

const express = require("express");
const app = express();

app.use(express.json());

let users = [
    { id: 1, name: "Giorgi", email: "giorgi@gmail.com" },
    { id: 2, name: "Nika", email: "nika@gmail.com" }
];

app.get("/users", (req, res) => {
    res.status(200).json(users);
});

app.post("/users", (req, res, next) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return next(new Error("Missing required fields"));
    }
    const newUser = {
        id: Date.now(),
        name,
        email
    };
    users.push(newUser);
    res.status(201).json({
        message: "User created successfully",
        user: newUser
    });
});

app.put("/users/:id", (req, res, next) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return next(new Error("Missing required fields"));
    }
    const user = users.find(
        u => u.id === Number(req.params.id)
    );
    if (!user) {
        return next(new Error("User not found"));
    }
    user.name = name;
    user.email = email;
    res.status(200).json({
        message: "User updated successfully",
        user
    });
});

app.use((err, req, res, next) => {
    res.status(400).json({
        message: err.message
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});