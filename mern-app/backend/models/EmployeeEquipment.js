const mongoose = require('mongoose');

const employeeEquipmentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  equipmentName: {
    type: String,
    required: true
  },
  quantity : {
    type: Number,
    required: true
  },
  reason : {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
  urgency: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },
  deadline: {
    type: Date,
    required: false
  },
  equipmentPrice: {
    type: Number,
    required: true
  },
  coverPrice: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('EmployeeEquipment', employeeEquipmentSchema);