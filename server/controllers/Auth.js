



const User = require("../models/User");
const OTP = require("../models/OTP");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");
require("dotenv").config();



exports.signUp = async (req, res) => {
  try {
    const { firstName, lastName, email, password, confirmPassword, otp } = req.body;

    if (!firstName || !lastName || !email || !password || !confirmPassword || !otp) {
      return res.status(400).json({ success: false, message: "All fields are required." });
    }

    console.log("Passwords before signup API call:", { password, confirmPassword });


    if (password !== confirmPassword) {
      return res.status(400).json({ success: false, message: "Passwords do not match." });
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ success: false, message: "User already exists. Please log in." });
    }

    const recentOTP = await OTP.findAll({
      where: { email },
      order: [["createdAt", "DESC"]],
      limit: 1,
    });

    if (!recentOTP.length || recentOTP[0].otp !== otp) {
      return res.status(400).json({ success: false, message: "Invalid or expired OTP." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully.",
      user: { 
        id: user.id, 
        firstName: user.firstName,  
        lastName: user.lastName,    
        email: user.email 
      },
    });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({ success: false, message: "Server error. Try again." });
  }
};





exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Email and password are required." });
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found. Please sign up." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Incorrect password." });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.status(200).json({
      success: true,
      message: "Login successful.",
      token,
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ success: false, message: "Server error. Try again." });
  }
};






exports.sendOtp = async (req, res) => {
  try {
    const { email } = req.body;
    console.log("Received email:", email);

    if (!email) {
      console.log("Email is missing");
      return res.status(400).json({ success: false, message: "Email is required." });
    }

    const existingUser = await User.findOne({ where: { email } });
    console.log("🔍 Checking existing user:", existingUser);

    if (existingUser) {
      console.log(" Email already registered");
      return res.status(409).json({ success: false, message: "Email already registered." });
    }

    let otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    let existingOTP = await OTP.findOne({ where: { otp } });
    while (existingOTP) {
      console.log("⚠️ OTP conflict. Generating a new one.");
      otp = otpGenerator.generate(6, { upperCaseAlphabets: false, lowerCaseAlphabets: false, specialChars: false });
      existingOTP = await OTP.findOne({ where: { otp } });
    }

    console.log("🆗 Final OTP to save:", otp);

    const created = await OTP.create({ email, otp });
    console.log("✅ OTP record created:", created.dataValues);

    return res.status(200).json({ success: true, message: "OTP sent successfully.", otp }); // For testing
  } catch (error) {
    console.error("❌ OTP Error:", error);
    return res.status(500).json({ success: false, message: "Failed to send OTP." });
  }
};



exports.changePassword = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { oldPassword, newPassword, confirmNewPassword } = req.body;

    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ success: false, message: "User not found." });

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Old password is incorrect." });
    }

    if (newPassword !== confirmNewPassword) {
      return res.status(400).json({ success: false, message: "Passwords do not match." });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await User.update({ password: hashedPassword }, { where: { id: userId } });

    return res.status(200).json({ success: true, message: "Password updated successfully." });
  } catch (error) {
    console.error("Change password error:", error);
    return res.status(500).json({ success: false, message: "Failed to update password." });
  }
};
