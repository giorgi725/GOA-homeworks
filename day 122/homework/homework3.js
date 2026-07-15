// 4) შექმენით Express project მომხმარებლების მართვის სისტემის თემაზე. შექმენით users array. გამოიყენეთ usersRouter.param("userId", ...) ფუნქცია, რომელიც id-ის მიხედვით მოძებნის მომხმარებელს და შეინახავს req.user-ში. დაამატეთ GET /users/:userId, PUT /users/:userId და DELETE /users/:userId routes. ყველა route-მა უნდა გამოიყენოს req.user. კომენტარებში ახსენით როდის იძახება router.param() და რატომ არის სასარგებლო მონაცემის წინასწარ მოძებნა

const Express = require("express")

const app = Express()

app.use(express.json());

let users = [
    { id: 1, name: "Giorgi", email: "giorgi@gmail.com" },
    { id: 2, name: "Nika", email: "nika@gmail.com" },
    { id: 3, name: "Luka", email: "luka@gmail.com" }
];

const usersRouter = express.Router();

usersRouter.param("userId", (req, res, next, userId) => {
    const user = users.find(u => u.id === Number(userId));

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }
    req.user = user;
    next();
});

usersRouter.get("/:userId", (req, res) => {
    res.status(200).json(req.user);
});

usersRouter.put("/:userId", (req, res) => {
    const { name, email } = req.body;
    if (name) req.user.name = name;
    if (email) req.user.email = email;
    res.status(200).json({
        message: "User updated successfully",
        user: req.user
    });
});

usersRouter.delete("/:userId", (req, res) => {
    users = users.filter(user => user.id !== req.user.id);

    res.status(200).json({
        message: "User deleted successfully",
        user: req.user
    });
});

app.use("/users", usersRouter);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});