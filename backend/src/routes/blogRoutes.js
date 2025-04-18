const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');
const auth = require('../middleware/auth');

// Get all approved blog posts
router.get('/posts', async (req, res) => {
  try {
    const posts = await Blog.find({ status: 'approved' }).sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Submit a new blog post
router.post('/submit', async (req, res) => {
  try {
    const { title, content, author, email } = req.body;
    
    const newPost = new Blog({
      title,
      content,
      author,
      email,
      status: 'pending'
    });

    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get pending posts (admin only)
router.get('/pending', auth, async (req, res) => {
  try {
    const posts = await Blog.find({ status: 'pending' }).sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Approve a blog post (admin only)
router.put('/approve/:id', auth, async (req, res) => {
  try {
    const post = await Blog.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    post.status = 'approved';
    const updatedPost = await post.save();
    res.json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Reject a blog post (admin only)
router.delete('/reject/:id', auth, async (req, res) => {
  try {
    const result = await Blog.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json({ message: 'Post rejected and deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Remove an approved blog post (admin only)
router.delete('/remove/:id', auth, async (req, res) => {
  try {
    const result = await Blog.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json({ message: 'Post removed successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single blog post by ID
router.get('/posts/:id', async (req, res) => {
  try {
    const post = await Blog.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 