const path = require('path');
const fs = require('fs');

const { readData, writeData } = require('../util/file');

const file_url = path.join(__dirname, "../Database/posts.json");

function createPost (req, res) {
    const { userId } = req.params;
    const {title, desc,} = req.body;
    
    if(!title || !desc) {
        return res.status(401).json({message: "Title and description of post are required"})
    }

    const posts = readData(file_url);

    const exists = posts.find((p) => p.title === title)

    if(exists) {
        return res.status(400).json({message: "Post with same title already exists"})
    }

    const newPost = {
        postId: Date.now(),
        userId: parseInt(userId),
        title,
        desc
    }

    writeData(newPost, file_url);
    res.status(200).json(newPost)
}

function getAllPosts(req, res) {
    const posts = readData(file_url);

    res.status(200).json(posts)
}

function getPosts(req, res) {
    const {userId} = req.params;

    const posts = readData(file_url);

    const myPosts = posts.filter((p) => p.userId === parseInt(userId));

    res.status(200).json(myPosts)
}

function deletePost(req, res) {
    const {userId, postId} = req.params;

    if(!userId || !postId) {
        return res.status(400).json({message: "User and post ids are required"})
    }

    const posts = readData(file_url)

    const found = posts.find((p) => p.postId === parseInt(postId))

    if(!found) {
        return res.status(404).json({message: "Post does't exist"})
    }

    if(found.userId !== parseInt(userId)) {
        return res.status(403).json({message: "You're not authorized to delete this post"})
    }

    const filteredPosts = posts.filter((p) => p.postId !== parseInt(postId))

    fs.writeFileSync(file_url, JSON.stringify(filteredPosts))

    return res.status(200).json(filteredPosts)
}

function editPost (req, res) {
    console.log("edit running")
    const {userId, postId} = req.params;
    const {newTitle, newDesc} = req.body;

    if(!newTitle || !newDesc) {
        return res.statuS(400).json({mesage: "New title and description are required to update the post"})
    }

    console.log("edit running")
    const allPosts = readData(file_url);

    const postIndex = allPosts.findIndex((p) => p.postId === parseInt(postId))
    console.log("ran til here")
    if(postIndex === -1) {
        return res.status(404).json({message: "Such post doesn't exist"})
    }
    console.log("ran til here")

    if (allPosts[postIndex].userId !== parseInt(userId)) {
        return res.status(403).json({message: "You're not authorized to edit this post"})
    }

    const updatedPost = {
        postId: parseInt(postId),
        userId: parseInt(userId),
        title: newTitle,
        desc: newDesc,
    }

    allPosts[postIndex] = updatedPost
    console.log(allPosts)
    fs.writeFileSync(file_url, JSON.stringify(allPosts))

    return res.status(200).json(allPosts)
}


module.exports = {
    getAllPosts,
    createPost,
    deletePost,
    getPosts,
    editPost
}