const express = require("express");
const app = express();

const usersRouter = require("./users");

app.use("/", usersRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
