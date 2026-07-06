// 4) შექმენით auth router სადაც იქნება POST /login და POST /register routes. /login route-მა უნდა დააბრუნოს "User logged in", ხოლო /register route-მა "User registered". გამოიყენეთ express.json() request body-სთვის და კომენტარებში ახსენით მისი დანიშნულება

const express = require("express");
const app = express();

const authRouter = require("./authrouter");

app.use(express.json());

app.use("/", authRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});


// express.json() არის middleware,
// რომელიც JSON ფორმატში გამოგზავნილ მონაცემებს
// გარდაქმნის JavaScript ობიექტად და ინახავს req.body-ში.

// POST /login - მომხმარებლის შესვლის (login) მარშრუტი.
// POST /register - მომხმარებლის რეგისტრაციის (register) მარშრუტი.
