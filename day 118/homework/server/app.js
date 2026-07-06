const express = require("express");
const cors = require("cors");
const app = express();

const authRouter = require("./routers/auth.router");
const postRouter = require("./routers/post.router");

// middleware
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173'
}))

// routers
app.use('/root/auth', authRouter)
app.use('/root/post', postRouter)


app.listen(3000, () => console.log("Server running on port 3000"))