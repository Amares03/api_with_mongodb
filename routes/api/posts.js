const express =require('express');
const router = express.Router();
// posts Model
const Posts = require('../../models/Posts');

// @route POST api/posts
//@desc create an post
router.post('/',(req,res)=>{
    res.send(`let's create Post!`);
});

module.exports = router;