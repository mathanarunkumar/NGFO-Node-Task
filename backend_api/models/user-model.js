const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  mobile: {
    type: String,
    required: true,
    unique: true,
    minlength: 10,
    maxlength: 10
  },
  otp: {
    type: String,
  },
  otpExpiry: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('user', userSchema);
