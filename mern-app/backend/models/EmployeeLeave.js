const mongoose = require('mongoose');

const employeeLeaveSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  leaveReason: {
    type: text,
    required: true
  },
  durationLeave: {
    type: Number,
    required: true
  },
  typeLeave: {
    type: text,
    required: true
  }
});

module.exports = mongoose.model('EmployeeLeave', employeeLeaveSchema);