

const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) {
      return res.status(400).json({ success: false, message: "Title is required" });
    }

    const task = await Task.create({
      title,
      status: "To Do",
      userId: req.user.userId,
    });

    return res.status(201).json({ success: true, task });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to create task" });
  }
};






