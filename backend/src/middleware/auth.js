const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ message: 'No authentication token, access denied' });
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    if (!verified) {
      return res.status(401).json({ message: 'Token verification failed, authorization denied' });
    }

    req.admin = verified;
    next();
  } catch (error) {
    res.status(500).json({ message: 'Invalid token' });
  }
};

module.exports = auth; 