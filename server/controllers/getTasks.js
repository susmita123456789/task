

const Task = require("../models/Task");

exports.getTask = async (req, res) => {
  try {
    const tasks = await Task.findAll({
      where: { userId: req.user.userId },
      order: [["createdAt", "DESC"]],
    });
    return res.status(200).json({ success: true, tasks });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to fetch tasks" });
  }
};