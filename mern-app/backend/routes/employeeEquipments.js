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

function checkEquipmentPrice(price) {
  let empCoverPrice = 0;
  if(price > 1000) {
    empCoverPrice = price * 0.5;
  }

  return empCoverPrice;
}

module.exports = router;