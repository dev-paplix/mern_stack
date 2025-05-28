const express = require('express');
const router = express.Router();
const EmployeeEquipment = require('../models/EmployeeEquipment');
const User = require('../models/User');
const auth = require('../middleware/auth');

router.get('/', auth, async (req, res) => {
  const equipment = await EmployeeEquipment.find().populate("user");
  res.json(equipment);
});

router.post('/', auth, async (req, res) => {
  const { userId, equipmentName, quantity, reason, deadline, status, urgency, equipmentPrice } = req.body;
  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ error: 'User not found' });

  const coverPrice = checkEquipmentPrice(equipmentPrice);

  const equipment = new EmployeeEquipment({
    user: userId,
    equipmentName,
    quantity,
    reason,
    deadline,
    status: status || 'pending',
    urgency: urgency || 'medium',
    equipmentPrice,
    coverPrice
  });
  await equipment.save();
  res.json(equipment);
});

// Update equipment (PATCH)
router.patch('/', auth, async (req, res) => {
  try {
    const equipmentId = req.query.id;
    if (!equipmentId) return res.status(400).json({ error: 'Equipment ID is required' });

    const updatedEquipment = await EmployeeEquipment.findByIdAndUpdate(
      equipmentId,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedEquipment) return res.status(404).json({ error: 'Equipment not found' });
    res.json(updatedEquipment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete equipment (DELETE)
router.delete('/', auth, async (req, res) => {
  try {
    const equipmentId = req.query.id;
    if (!equipmentId) return res.status(400).json({ error: 'Equipment ID is required' });

    const deletedEquipment = await EmployeeEquipment.findByIdAndDelete(equipmentId);
    if (!deletedEquipment) return res.status(404).json({ error: 'Equipment not found' });
    res.json({ message: 'Equipment deleted', equipmentId });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

function checkEquipmentPrice(price) {
  let empCoverPrice = 0;
  if(price > 1000) {
    empCoverPrice = price * 0.5;
  }

  return empCoverPrice;
}

module.exports = router;