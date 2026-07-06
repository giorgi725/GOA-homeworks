const express = require("express");
const { createPost, getAllPosts, deletePost, getPosts, editPost } = require("../controllers/post.controller");
const postRouter = express.Router();

postRouter.get('/', getAllPosts)
postRouter.get('/:userId', getPosts)
postRouter.post('/:userId', createPost)
postRouter.delete("/:userId/:postId", deletePost)
postRouter.put("/:userId/:postId", editPost)

module.exports = postRouter