const express = require("express");
const app = express();

const studentsRouter = require("./students");

app.use(express.json());

app.use("/", studentsRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

// GET /students - აბრუნებს ყველა სტუდენტს

// GET /students/:id - აბრუნებს კონკრეტული სტუდენტის ID-ს
// req.params.id შეიცავს URL-დან მიღებულ id-ს

// DELETE /students/:id - შლის სტუდენტს ID-ის მიხედვით
// console.log(req.params.id) ბეჭდავს id-ს ტერმინალში