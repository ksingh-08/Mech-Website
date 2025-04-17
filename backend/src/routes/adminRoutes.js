const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin');
const Blog = require('../models/Blog');

// Simple admin credentials
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin123';

// Admin login - simplified version
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Simple credential check
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      const token = jwt.sign(
        { username: ADMIN_USERNAME },
        process.env.JWT_SECRET || 'default-secret-key',
        { expiresIn: '1d' }
      );
      return res.json({ token });
    }
    
    return res.status(400).json({ message: 'Invalid credentials' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get pending posts
router.get('/pending', async (req, res) => {
  try {
    const posts = await Blog.find({ status: 'pending' }).sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 