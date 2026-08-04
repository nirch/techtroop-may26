const Post = require("../models/Post");

async function getPosts(req, res) {
  const posts = await Post.find().populate("author", "name email");
  res.status(200).json(posts);
}

async function createPost(req, res) {
  // validate that "author" exists in users collection
  const newPost = await Post.create(req.body);
  res.status(201).json(newPost);
}

module.exports = { createPost, getPosts };
