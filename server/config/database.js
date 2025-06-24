// config/database.js

const { Sequelize } = require('sequelize');
require('dotenv').config();

// Initialize Sequelize instance with environment variables
const sequelize = new Sequelize(
  process.env.DB_NAME,     // Database name
  process.env.DB_USER,     // MySQL username
  process.env.DB_PASSWORD, // MySQL password
  {
    host: process.env.DB_HOST,       // e.g., 'localhost'
    dialect: process.env.DB_DIALECT, // 'mysql' or 'postgres'
    logging: false,                  // Disable raw SQL logging in console
  }
);

// Function to establish database connection
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected successfully.');
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    process.exit(1); // Exit process if connection fails
  }
};

module.exports = { sequelize, connectDB };
