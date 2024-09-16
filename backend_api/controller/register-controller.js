const User = require('../models/user-model');
const otpGenerator = require('../lip/otp-generated-controller');
const jwt = require('jsonwebtoken');



exports.register = async (req, res) => {
  const { mobile } = req.body;

  const otp = otpGenerator();

  try {

    let user = await User.findOne({ mobile });


    if (!user) {
      user = new User({ 
        mobile,
        otp, 
        otpExpiry: Date.now() + 10 * 60000
     });
    } else {
      user.otp = otp;
      user.otpExpiry = Date.now() + 10 * 60000;
    }

    await user.save();

    res.status(200).json({ message: `otp sent to ${mobile}: ${otp}` });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};


exports.login = async (req, res) => {

  const { mobile, otp } = req.body;

  try {
    const user = await User.findOne({ mobile });

    if (!user || user.otp !== otp || user.otpExpiry < Date.now()) {
      return res.status(400).json({ message: 'Invalid otp or otp expired' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
