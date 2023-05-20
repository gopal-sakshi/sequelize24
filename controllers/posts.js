const posts = require('../models/posts');
var express = require('express');
var router = express.Router();

router.get('/getAll', async (req, res) => { 
    posts.findAll({}).then(data => res.status(200).send(data))
});

router.post('/createPost', async (req, res) => { 
    const postPayload = {
        isPublished: req.body.isPublished,
        title : req.body.title,
        author : req.body.author,
        timestamp: req.body.timestamp,
        publishedDate : Date.now() 
    }
    posts.create(postPayload).then(data => res.status(200).send(data))
});

module.exports = router;