const express = require('express');
const router = express.Router();
const EmployeeLeave = require('../models/EmployeeLeave');
const User = require('../models/User');

// Get all employee leave with user data
router.get('/', async (req, res) => {
  const leave = await EmployeeLeave.find().populate('user');
  res.json(leave);
});

// Create a new employee leave request
router.post('/', async (req, res) => {
  const { userId, leaveReason, durationLeave,typeLeave } = req.body;
  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ error: 'User not found' });

  const benefit = new EmployeeLeave({
    user: userId,
    leaveReason,
    durationLeave,
    typeLeave
  });
  await benefit.save();
  res.json(benefit);
});

module.exports = router;

