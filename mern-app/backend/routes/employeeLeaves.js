const express = require('express');
const router = express.Router();
const EmployeeLeave = require('../models/EmployeeLeave');
const User = require('../models/User');
const auth = require('../middleware/auth'); // <-- Import the middleware
const EmployeeBenefit = require('../models/EmployeeBenefit');


// Get all employee benefits with user data
router.get('/', async (req, res) => {
  const benefits = await EmployeeBenefit.find().populate('user');
  res.json(benefits);
});

// Get all employee leave with user data
router.get('/', auth ,async (req, res) => {
  const leave = await EmployeeLeave.find().populate('user');
  res.json(leave);
});

// Create a new employee leave request
router.post('/', auth, async (req, res) => {
  const { userId, leaveReason, durationLeave,typeLeave, durationType } = req.body;
  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ error: 'User not found' });

  const benefit = new EmployeeLeave({
    user: userId,
    leaveReason,
    durationLeave,
    typeLeave,
    durationType
  });
  await benefit.save();
  res.json(benefit);
});



// each non medical leave the employee is going to get penalized of rm150 per day or rm20 per hour
function calculateEmploymentSalary(salary) {

  if (typeLeave = 'annual', 'maternity', 'emergency','compassionate' ) {
    (salary - 150);
  } else {
    return salary;  }

}

// Update user (PATCH)
router.patch('/', auth, async (req, res) => {
  try {
    const userId = req.query.id;
    if (!userId) return res.status(400).json({ error: 'Leave ID is required' });

    const updatedLeave = await User.findByIdAndUpdate(
      userId,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedLeave) return res.status(404).json({ error: 'Leave not found' });
    res.json(updatedLeave);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete user (DELETE)
router.delete('/', auth, async (req, res) => {
  try {
    const userId = req.query.id;
    if (!userId) return res.status(400).json({ error: 'Leave ID is required' });

    const deletedLeave = await User.findByIdAndDelete(userId);
    if (!deletedLeave) return res.status(404).json({ error: 'Leave not found' });
    res.json({ message: 'Leave deleted', userId });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;

