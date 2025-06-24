const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Task = sequelize.define("Task", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("To Do", "In Progress", "Done"),
    defaultValue: "To Do",
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = Task;
