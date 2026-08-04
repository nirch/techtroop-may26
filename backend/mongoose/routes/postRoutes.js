const express = require("express");
const { createPost, getPosts } = require("../controllers/postController");

const router = express.Router();

router.get("/", getPosts);
router.post("/", /*validatePostData,*/ createPost);


module.exports = router;
