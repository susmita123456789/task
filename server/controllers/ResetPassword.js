


const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

exports.resetPasswordToken = async (req, res) => {
  try {
    const { email } = req.body;

    // Find user by email
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: `This Email: ${email} is not registered. Please enter a valid email.`,
      });
    }

    // Generate token and expiry (1 hour)
    const token = crypto.randomBytes(20).toString("hex");
    const expiry = Date.now() + 3600000;

    // Update user with token and expiry
    await user.update({
      token,
      resetPasswordExpires: expiry,
    });

    // Send reset link via email
    const url = `http://localhost:3000/update-password/${token}`;
    await mailSender(
      email,
      "Password Reset",
      `Click this link to reset your password: ${url}`
    );

    return res.status(200).json({
      success: true,
      message: "Email sent successfully. Please check your email.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error occurred while sending reset email.",
      error: error.message,
    });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { password, confirmPassword, token } = req.body;

    if (!password || !confirmPassword || !token) {
      return res.status(400).json({
        success: false,
        message: "Password, confirm password, and token are required.",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password and confirm password do not match.",
      });
    }

    // Find user by token
    const user = await User.findOne({ where: { token } });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Invalid token.",
      });
    }

    if (user.resetPasswordExpires < Date.now()) {
      return res.status(403).json({
        success: false,
        message: "Token has expired. Please request a new password reset.",
      });
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update password and clear token fields
    await user.update({
      password: hashedPassword,
      token: null,
      resetPasswordExpires: null,
    });

    return res.status(200).json({
      success: true,
      message: "Password reset successful.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error occurred while resetting password.",
      error: error.message,
    });
  }
};
