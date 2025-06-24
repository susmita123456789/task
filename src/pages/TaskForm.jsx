

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTask, updateTask } from "../services/operations/taskAPI";
import { useParams, useNavigate } from "react-router-dom";
import ConfirmationModal from "../components/common/ConfirmationModal";

const TaskForm = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks.list);
  const existingTask = tasks.find((task) => task.id === Number(taskId));

  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("To Do");
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    if (taskId && existingTask) {
      setTitle(existingTask.title);
      setStatus(existingTask.status || "To Do");
    }
  }, [taskId, existingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("Title is required");

    if (taskId) {
      dispatch(updateTask({ id: taskId, title, status }));
    } else {
      dispatch(createTask(title));
    }

    navigate("/dashboard/tasks");
  };

  const handleCancelClick = () => {
    setShowConfirm(true);
  };

  const confirmCancel = () => {
    setShowConfirm(false);
    navigate("/dashboard/tasks");
  };

  const declineCancel = () => {
    setShowConfirm(false);
  };

  const modalData = {
    text1: "Discard changes?",
    text2: "Are you sure you want to cancel? Your changes will be lost.",
    btn1Text: "Yes, discard",
    btn1Handler: confirmCancel,
    btn2Text: "No",
    btn2Handler: declineCancel,
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-700 p-8 rounded-2xl shadow-lg text-white"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-center tracking-wide drop-shadow-md">
          {taskId ? "Edit Task" : "Create Task"}
        </h2>

        <div className="mb-6">
          <label
            htmlFor="title"
            className="block mb-2 font-semibold text-indigo-200 uppercase tracking-wide"
          >
            Title <span className="text-red-400">*</span>
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
            className="w-full rounded-md px-4 py-3 text-black font-medium shadow-inner focus:outline-none focus:ring-4 focus:ring-purple-300"
            required
            autoFocus
          />
        </div>

        <div className="mb-8">
          <label
            htmlFor="status"
            className="block mb-2 font-semibold text-indigo-200 uppercase tracking-wide"
          >
            Status
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full rounded-md px-4 py-3 text-black font-semibold shadow-inner focus:outline-none focus:ring-4 focus:ring-purple-300"
          >
            <option>To Do</option>
            <option>In Progress</option>
            <option>Done</option>
          </select>
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleCancelClick}
            className="px-6 py-3 bg-red-500 hover:bg-red-600 transition-colors rounded-xl font-semibold shadow-lg drop-shadow-md focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-3 bg-green-500 hover:bg-green-600 transition-colors rounded-xl font-semibold shadow-lg drop-shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 text-white"
          >
            {taskId ? "Update Task" : "Create Task"}
          </button>
        </div>
      </form>

      {showConfirm && <ConfirmationModal modalData={modalData} />}
    </>
  );
};

export default TaskForm;
