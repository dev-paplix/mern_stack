const express = require('express');
const router = express.Router();
const EmployeeLeave = require('../models/EmployeeLeave');
const User = require('../models/User');
const auth = require('../middleware/auth'); // <-- Import the middleware


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

module.exports = router;

