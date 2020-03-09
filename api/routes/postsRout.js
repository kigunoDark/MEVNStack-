const express = require('express');
const Post = require('../models/post');
const auth = require('../mid/auth');
const router = express.Router();

router.get('/', auth,  async(req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = 5;
  try {
    const pageNumber = await Post.countDocuments();
    const posts = await Post.find().limit(limit).skip(page * limit).sort({name:'asc'});
    if(posts.length < 0) res.json({error: 'You do not have posts'});
    if(!posts) res.status(400).send('Wrong request'); 
    let data = {
      posts,
      pagesNum: pageNumber
    }
    res.json(data);

  } catch(error) {
    res.status(500).send('Something wrong with the server!');
  };
});

router.post('/add', async(req, res) => {
  try {
    const {title, body} = req.body;
    const post = new Post({ title, body, userId: req.header('user') });
    let newPost = await post.save();
    res.json(newPost);
  } catch(error) {
    res.status(500).send('Something wrong with the server!')
  }
});


router.put('/clap', async(req, res) => {
  try { 
    const {id ,claps} = req.body;
    const updatedClap = await Post.findByIdAndUpdate({_id:id}, {claps});
    if(!updatedClap)  res.status(401).json('Not found!');
    res.json(updatedClap);
  } catch(err) {
    res.status(500).send('Something wrong with the server!')
  }
 
})
router.get('/edit/:id', async(req, res) => {
  try {
    let post = await Post.findOne({_id: req.params.id});
    if(!post)  res.status(401).json('Not found!');
    res.json(post);
  } catch(err) {
    res.status(500).send('Something wrong with the server!')
  }
});

router.put('/update/:id', async(req, res) => {
  try {
    const {title, body} = req.body;
   let updatedPost = await Post.findByIdAndUpdate({_id: req.params.id}, {title, body});
   if(!updatedPost)  res.status(401).json('Not found!');
   res.json(updatedPost);
  } catch(error) {
    res.status(500).json({error, message:'Something wront with your connection'})
  }
}) 

router.delete('/delete/:id', async(req, res) => {
  try {
    let deleted = await Post.findByIdAndRemove({_id: req.params.id});
    if(!deleted) res.status(401).json('Not found!');
    res.json('Deleted successfully!')
  } catch(error) {
    res.status(500).json({error, message:'Something wrong with your connection'})
  }
})

module.exports = router;