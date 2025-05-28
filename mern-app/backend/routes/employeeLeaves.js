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

  // Calculate penalty
  const leavePenalty = calculateEmploymentPenalty(durationLeave);

  const leave = new EmployeeLeave({
    user: userId,
    leaveReason,
    durationLeave,
    typeLeave,
    durationType,
    leavePenalty
  });
  await leave.save();
  res.json(leave);
});




// each non medical leave the employee is going to get penalized of rm150 per day or rm20 per hour
function calculateEmploymentPenalty(penalty) {

  if (typeLeave = 'annual', 'maternity', 'emergency','compassionate' ) {
    let penalty = 0;
    (penalty + 150);
  } else {
    return penalty;  }

}

// // Update user (PATCH)
router.patch('/', auth, async (req, res) => {
  try {
    const leaveId = req.query.id;
    if (!leaveId) return res.status(400).json({ error: 'Leave ID is required' });

    const updatedLeave = await EmployeeLeave.findByIdAndUpdate(
      leaveId,
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
    const leaveId = req.query.id;
    if (!leaveId) return res.status(400).json({ error: 'Leave ID is required' });

    const deletedLeave = await EmployeeLeave.findByIdAndDelete(leaveId);
    if (!deletedLeave) return res.status(404).json({ error: 'Leave not found' });
    res.json({ message: 'Leave deleted', leaveId });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;

