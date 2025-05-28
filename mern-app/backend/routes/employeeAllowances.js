const express = require('express');
const router = express.Router();
const Allowance = require('../models/EmployeeAllowance');
const User = require('../models/User');
const auth = require('../middleware/auth');

// Get all employee allowance with user data
router.get("/", auth, async (req, res) => { 
  const allowance = await Allowance.find().populate('user');
  res.json(allowance);
});

// Create a new employee allowance
router.post('/', auth, async (req, res) => {
  const { userId, employeesAllowanceAmount, employeesAllowanceReason, employeesExtra } = req.body;
  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ error: 'User not found' });

  // Calculate amount for Lead based on salary
  const employeesforLead = calculateForLead(employeesAllowanceAmount);

    const allowance = new Allowance({
        user: userId,
        employeesAllowanceAmount,
        employeesAllowanceReason,
        employeesExtra,
        employeesforLead
    });
    await allowance.save();
    res.json(allowance);
});

function calculateForLead(allowance) {
  let forLead = 0;

  if (allowance > 1000) {
    forLead = allowance*0.6;
  } 
  
  return forLead;
}

module.exports = router;