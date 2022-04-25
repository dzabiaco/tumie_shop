const Post = require('../models/Blog/Post');

exports.getAllPosts = async (req, res, next) => {
    const posts = await Post.find();
    res.status(200).json(posts)
    // res.send({"msg": "posts fetched", posts: posts_arr});
}

exports.fetchOnePost = async (req, res, next) => {
    const id = req.params.id;
    const post = await Post.findOne({_id: id});
    res.send({post});
}

exports.getRelatedPosts = async (req, res, next) => {
    const related_posts = await Post.find().sort("-created_at").limit(3);
    res.send({related_posts});
}

exports.createPost = async (req, res, next) => {
    const title = req.body.title;
    const date = req.body.date;
    const image = req.body.image;
    const message = req.body.message;
    const created_at = new Date();
    const post = new Post({
        title, date, image, message, created_at
    });
    await post.save();
    res.send({"msg": post});
}

exports.deletePost = async (req, res, next) => {
    res.send({"msg": "posts created"});
}

exports.updatePost = async (req, res, next) => {
    res.send({"msg": "posts created"});
}