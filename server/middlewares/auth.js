const jwt = require("jsonwebtoken");
require("dotenv").config();

// ✅ Authentication middleware
exports.auth = async (req, res, next) => {
  try {
    // Extract token from headers, body, or cookies
    let token =
      req.cookies?.token ||
      req.body?.token ||
      req.headers["authorization"]?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token is missing",
      });
    }

    // Verify JWT token
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded; // Attach decoded user data to request
      next();
    } catch (err) {
      return res.status(401).json({
        success: false,
        message: "Token is invalid or expired",
      });
    }
  } catch (error) {
    console.error("Auth middleware error:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while validating token",
    });
  }
};
