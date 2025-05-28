const express = require('express');
const router = express.Router();
const EmployeeBenefit = require('../models/EmployeeBenefit');
const User = require('../models/User');

// Get all employee benefits with user data
router.get('/', async (req, res) => {
  const benefits = await EmployeeBenefit.find().populate('user');
  res.json(benefits);
});

// Create a new employee benefit
router.post('/', async (req, res) => {
  const { userId, employeesFixSalary, employeesAllowance } = req.body;
  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ error: 'User not found' });

  // Calculate tax based on salary
  const employeesTaxRate = calculateEmploymentTax(employeesFixSalary);

  const benefit = new EmployeeBenefit({
    user: userId,
    employeesFixSalary,
    employeesAllowance,
    employeesTaxRate
  });
  await benefit.save();
  res.json(benefit);
});

function calculateEmploymentTax(salary) {
  let tax = 0;

  if (salary <= 5000) {
    tax = 0;
  } else if (salary <= 20000) {
    tax = 0 + (salary - 5000) * 0.01;
  } else if (salary <= 35000) {
    tax = 150 + (salary - 20000) * 0.03;
  } else if (salary <= 50000) {
    tax = 600 + (salary - 35000) * 0.06;
  } else if (salary <= 70000) {
    tax = 1500 + (salary - 50000) * 0.11;
  } else if (salary <= 100000) {
    tax = 3700 + (salary - 70000) * 0.19;
  } else if (salary <= 400000) {
    tax = 9400 + (salary - 100000) * 0.25;
  } else if (salary <= 600000) {
    tax = 84400 + (salary - 400000) * 0.26;
  } else if (salary <= 2000000) {
    tax = 136400 + (salary - 600000) * 0.28;
  } else {
    tax = 528400 + (salary - 2000000) * 0.30;
  }

  return tax;
}

module.exports = router;
