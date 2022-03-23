const express =require('express');
const router = express.Router();
// posts Model
const Posts = require('../../models/Posts');


import * as postsJs from '../../controllers/posts';

// @route GET api/posts
//@desc get all post
router.get('/', postsJs.getAllPosts);

// @route POST api/posts
//@desc create an post
router.post('/', postsJs.postPosts);

// @route DELETE api/posts/id
//@desc delete an post
router.delete('/:id', postsJs.deleteById);

// @route UPDATE api/posts/id
//@desc update an post
router.patch('/:id', postsJs.updateById);

// @route GET api/posts/id
//@desc get an post
router.get('/:id', postsJs.getById);


module.exports = router;