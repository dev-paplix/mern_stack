const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth'); // <-- Import the middleware

router.get("/", auth, async (req, res) => { // <-- Protect this route
  const users = await User.find();
  res.json(users);
});

router.post("/", async (req, res) => { // <-- Registration (public)
  const newUser = new User(req.body);
  await newUser.save();
  res.json(newUser);
});

// Login route (public)
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ error: 'Invalid credentials' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ error: 'Invalid Password' });

  // Generate JWT
  const token = jwt.sign(
    { userId: user._id, isAdmin: user.isAdmin },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({ userId: user._id, token });
});

module.exports = router;
