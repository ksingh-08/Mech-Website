const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const bcrypt = require('bcryptjs');
const Admin = require('./models/Admin');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Create default admin user
const createDefaultAdmin = async () => {
  try {
    // Check if admin exists
    const adminExists = await Admin.findOne({ username: 'admin' });
    if (!adminExists) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash('admin123', salt);
      
      const admin = new Admin({
        username: 'admin',
        password: hashedPassword
      });
      
      await admin.save();
      console.log('Default admin user created successfully');
    }
  } catch (error) {
    console.error('Error creating default admin:', error);
  }
};

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/welding-research', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
  createDefaultAdmin(); // Create default admin after connecting
})
.catch(err => console.error('MongoDB connection error:', err));

// Routes
const blogRoutes = require('./routes/blogRoutes');
const adminRoutes = require('./routes/adminRoutes');

app.use('/api/blog', blogRoutes);
app.use('/api/admin', adminRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 