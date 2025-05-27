const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  initialBalance: {
    type: Number,
    default: 0
  },
});

module.exports = mongoose.model("User", userSchema);
