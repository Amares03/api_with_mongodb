// posts Model
const Posts = require('../../models/Posts');



 const getAllPosts = async (req,res)=>{
    try {
        const posts = await Posts.find();
        if(!posts) throw Error(`No Items Here`);
        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json({msg:error});
    }
}

 const postPosts = async (req,res)=>{
    const newPost = new Posts(req.body);
 
    try {
        const post = await newPost.save();
        if(!post) throw Error(`Something went wrong while saving the post`);
 
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({msg:error});
    }
 }

  const deleteById = async (req,res)=>{
    try {
        const posts = await Posts.findByIdAndDelete(req.params.id);
        if(!posts) throw Error(`No Items Found`);
        res.status(200).json({success:true});
    } catch (error) {
        res.status(400).json({msg:error});
    }
}

 const updateById = async(req,res)=>{
    try {
        const posts = await Posts.findByIdAndUpdate(req.params.id,req.body);
        if(!posts) throw Error(`Something went wrong while updating the post`);
        res.status(200).json({success:true});
    } catch (error) {
        res.status(400).json({msg:error});
    }
}

 const getById = async(req,res)=>{
    try {
        const post = await Posts.findById(req.params.id);
        if(!post) throw Error(`Id not Found Try Again`);
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({msg:error});
    }
}

module.exports = getAllPosts;
module.exports = postPosts;
module.exports = deleteById;
module.exports = updateById;
module.exports = getById;