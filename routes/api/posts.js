const express =require('express');
const router = express.Router();
// posts Model
const Posts = require('../../models/Posts');

// @route GET api/posts
//@desc get all post
router.get('/', async (req,res)=>{
    try {
        const posts = await Posts.find();
        if(!posts) throw Error(`No Items Here`);
        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json({msg:error});
    }
});



// @route POST api/posts
//@desc create an post
router.post('/', async (req,res)=>{
   const newPost = new Posts(req.body);

   try {
       const post = await newPost.save();
       if(!post) throw Error(`Something went wrong while saving the post`);

       res.status(200).json(post);
   } catch (error) {
       res.status(400).json({msg:error});
   }
});

module.exports = router;