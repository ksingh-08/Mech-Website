require('dotenv').config();
const mongoose = require('mongoose');
const Admin = require('./models/Admin');

const createInitialAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ username: process.env.ADMIN_USERNAME });
    if (existingAdmin) {
      console.log('Admin user already exists');
      process.exit(0);
    }

    // Create new admin
    const admin = new Admin({
      username: process.env.ADMIN_USERNAME,
      password: process.env.ADMIN_PASSWORD
    });

    await admin.save();
    console.log('Admin user created successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error creating admin:', error);
    process.exit(1);
  }
};

createInitialAdmin(); 