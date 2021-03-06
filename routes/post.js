
const express = require('express')
const Post = require('../models/Post')

const router = express.Router()
// http://localhost:5000/api/post GET
router.get('', async(req, res) => {
    const posts = await Post.find({})
    res.status(200).json(posts)
})
// http://localhost:5000/api/post POST
router.post('', async(req, res) => {
	const postData = {
		title: req.body.title,
		text: req.body.text,
        
	}
    const post = new Post(postData)
	await post.save()
    res.status(201).json(post)
})
// http://localhost:5000/api/post/34 DELETE
router.delete('/:id', async (req, res) => {
	await Post.remove({_id: req.params.id})
    res.status(200).json({
        message: 'Удалено'
    })
})

module.exports = router