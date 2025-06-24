const { Task } = require("../models");


exports.getTasks = async (req, res) => {
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

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, title } = req.body;

    const task = await Task.findOne({ where: { id, userId: req.user.userId } });
    if (!task) {
      return res.status(404).json({ success: false, message: "Task not found" });
    }

    if (status) task.status = status;
    if (title) task.title = title;

    await task.save();

    return res.status(200).json({ success: true, message: "Task updated", task });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Update failed" });
  }
};
