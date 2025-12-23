const express = require('express');
const router = express.Router();
const auth = require('../middleware/user.middleware');
const { createPost, getAllPosts, getPost, updatePost, deletePost } = require('../controllers/post.controller');

router.post('/', auth, createPost);
router.get('/', getAllPosts);
router.get('/:id', getPost);
router.put('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);

module.exports = router;