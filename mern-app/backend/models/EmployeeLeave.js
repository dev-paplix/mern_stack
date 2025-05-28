const mongoose = require('mongoose');

const employeeLeaveSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  leaveReason: {
    type: String,
    required: true
  },
  durationLeave: {
    type: Number,
    required: true
  },
  durationType: {
    type: String,
    enum: ['days', 'hours', 'weeks', 'months'],
    required: true
  },
  typeLeave: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('EmployeeLeave', employeeLeaveSchema);