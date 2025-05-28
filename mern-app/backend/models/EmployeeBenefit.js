const mongoose = require('mongoose');

const employeeBenefitSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  employeesFixSalary: {
    type: Number,
    required: true
  },
  employeesAllowance: {
    type: Number,
    required: true
  },
  employeesTaxRate: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('EmployeeBenefit', employeeBenefitSchema);