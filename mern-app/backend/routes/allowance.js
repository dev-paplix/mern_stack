const express = require('express');
const router = express.Router();
const Allowance = require('../models/Allowance');
const User = require('../models/User');
const auth = require('../middleware/auth');

// Get all employee allowance with user data
router.get("/", auth, async (req, res) => { 
  const allowance = await Allowance.find().populate('user');
  res.json(allowance);
});

// Create a new employee allowance
router.post('/', auth, async (req, res) => {
  const { userId, employeesAllowanceAmount, employeesAllowanceReason } = req.body;
  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ error: 'User not found' });

    const allowance = new EmployeeAllowance({
        user: userId,
        employeesAllowanceAmount,
        employeesAllowanceReason,
        employeesExtra
    });
    await allowance.save();
    res.json(allowance);
});