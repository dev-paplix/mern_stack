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
  date : {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('EmployeeEquipment', employeeEquipmentSchema);