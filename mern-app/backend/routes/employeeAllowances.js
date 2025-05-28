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

function calculateForLead(leadAllowance) {
  let forLead = 0;

  if (leadAllowance > 1000) {
    forLead = leadAllowance*0.6;
  } 
  
  return forLead;
}

// Update allowance (PATCH)
router.patch('/', auth, async (req, res) => {
  try {
    const allowanceId = req.query.id;
    if (!allowanceId) return res.status(400).json({ error: 'Allowance ID is required' });

    const updatedAllowance = await Allowance.findByIdAndUpdate(
      allowanceId,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedAllowance) return res.status(404).json({ error: 'Allowance not found' });
    res.json(updatedAllowance);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete user (DELETE)
router.delete('/', auth, async (req, res) => {
  try {
    const allowanceId = req.query.id;
    if (!allowanceId) return res.status(400).json({ error: 'Allowance ID is required' });

    const deletedAllowance = await Allowance.findByIdAndDelete(allowanceId);
    if (!deletedAllowance) return res.status(404).json({ error: 'Allowance not found' });
    res.json({ message: 'Allowance deleted', allowanceId });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;