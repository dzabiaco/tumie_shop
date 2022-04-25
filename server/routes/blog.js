const express = require('express');

const blogController = require('../controllers/blog.controller')

const router = express.Router();

router.get(`/fetch-posts`, blogController.getAllPosts);

router.get(`/fetch-posts/:id`, blogController.fetchOnePost);

router.get(`/fetch-related-posts`, blogController.getRelatedPosts);

router.post(`/create-post`, blogController.createPost);

router.delete(`/delete-post/:id`, blogController.deletePost);

router.put(`/update-post/id`, blogController.updatePost);


module.exports = router;