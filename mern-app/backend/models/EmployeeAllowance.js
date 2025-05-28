const mongoose = require('mongoose');

const AllowanceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  employeesAllowanceAmount: {
    type: Number,
    required: true
  },
  employeesAllowanceReason: {
    type: String,
    required: true
  },
  employeesExtra: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Allowance', AllowanceSchema);