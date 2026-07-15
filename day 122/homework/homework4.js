// 5) შექმენით Express project ბლოგის თემაზე. შექმენით posts array. გამოიყენეთ postsRouter.param("postId", ...) ფუნქცია, რომელიც პოსტის არსებობას შეამოწმებს და req.post-ში შეინახავს. დაამატეთ GET /posts/:postId, PATCH /posts/:postId და DELETE /posts/:postId routes. ყველა route-მა უნდა გამოიყენოს req.post. კომენტარებში ახსენით როგორ ამცირებს router.param() duplicate კოდს და რატომ ითვლება Pre-Processing Middleware-ად

const express = require("express");
const app = express();

app.use(express.json());

let posts = [
    { id: 1, title: "JavaScript Basics", content: "Introduction to JavaScript" },
    { id: 2, title: "Node.js", content: "Learn Node.js and Express" },
    { id: 3, title: "React", content: "Building UI with React" }
];

const postsRouter = express.Router();

postsRouter.param("postId", (req, res, next, postId) => {
    const post = posts.find(p => p.id === Number(postId));

    if (!post) {
        return res.status(404).json({
            message: "Post not found"
        });
    }
    req.post = post;
    next();
});

postsRouter.get("/:postId", (req, res) => {
    res.status(200).json(req.post);
});

postsRouter.patch("/:postId", (req, res) => {
    const { title, content } = req.body;

    if (title) req.post.title = title;
    if (content) req.post.content = content;

    res.status(200).json({
        message: "Post updated successfully",
        post: req.post
    });
});

postsRouter.delete("/:postId", (req, res) => {
    posts = posts.filter(post => post.id !== req.post.id);
    res.status(200).json({
        message: "Post deleted successfully",
        post: req.post
    });
});

app.use("/posts", postsRouter);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});