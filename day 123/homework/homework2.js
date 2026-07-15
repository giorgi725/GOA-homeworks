// 3) შექმენით Express server და posts მასივი. server-ზე უნდა იყოს routes: /posts, /posts/:postId (get, put, delete). app.param() middleware-მა postId-ით უნდა იპოვოს post. GET აბრუნებს ერთ post-ს, PUT ცვლის title-ს და desc-ს, DELETE შლის post-ს.

// let posts = [
//     {id: 1, title: "Post 1", desc: "First post"},
//     {id: 2, title: "Post 2", desc: "Second post"},
//     {id: 3, title: "Post 3", desc: "Third post"},
//     {id: 4, title: "Post 4", desc: "Fourth post"},
// ]

const express = require("express");
const app = express();

app.use(express.json());

let posts = [
    { id: 1, title: "Post 1", desc: "First post" },
    { id: 2, title: "Post 2", desc: "Second post" },
    { id: 3, title: "Post 3", desc: "Third post" },
    { id: 4, title: "Post 4", desc: "Fourth post" },
];

app.param("postId", (req, res, next, postId) => {
    const post = posts.find(
        p => p.id === Number(postId)
    );

    if (!post) {
        return res.status(404).json({
            message: "Post not found"
        });
    }

    req.post = post;
    next();
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

app.get("/posts/:postId", (req, res) => {
    res.status(200).json(req.post);
});

app.put("/posts/:postId", (req, res) => {
    const { title, desc } = req.body;

    if (title) req.post.title = title;
    if (desc) req.post.desc = desc;

    res.status(200).json({
        message: "Post updated successfully",
        post: req.post
    });
});

app.delete("/posts/:postId", (req, res) => {
    posts = posts.filter(post => post.id !== req.post.id);

    res.status(200).json({
        message: "Post deleted successfully",
        deletedPost: req.post
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});