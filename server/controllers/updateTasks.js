

const Task = require("../models/Task");
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