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

// @route DELETE api/posts/id
//@desc delete an post
router.delete('/:id', async (req,res)=>{
    try {
        const posts = await Posts.findByIdAndDelete(req.params.id);
        if(!posts) throw Error(`No Items Found`);
        res.status(200).json({success:true});
    } catch (error) {
        res.status(400).json({msg:error});
    }
});

// @route UPDATE api/posts/id
//@desc update an post
router.patch('/:id', async(req,res)=>{
    try {
        const posts = await Posts.findByIdAndUpdate(req.params.id,req.body);
        if(!posts) throw Error(`Something went wrong while updating the post`);
        res.status(200).json({success:true});
    } catch (error) {
        res.status(400).json({msg:error});
    }
});

// @route GET api/posts/id
//@desc get an post
router.get('/:id', async(req,res)=>{
    try {
        const posts = await Posts.findById(req.params.id);
        if(!posts) throw Error(`Id not Found Try Again`);
        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json({msg:error});
    }
});


module.exports = router;