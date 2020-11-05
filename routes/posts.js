const express = require('express');
const router = express.Router();
const Post = require('../models/Post')




//routes
router.get('/',(req,res)=> {
    res.send('we are on home')
});


router.post('/' ,(res,req) => {
    // const post = new Post({
    //     title: req.body.title,
    //     description: req.body.description
    // })
    // post.save()
    // .exec()
    // .then(data => {
    //     res.json(data)
    // })
    // .catch(err => {
    //    res.json({message: err})
    // })
    console.log(req.body);
});

module.exports = router;