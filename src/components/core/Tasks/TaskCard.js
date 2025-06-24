



import React from "react";

const TaskCard = ({ task, onEdit }) => {
  return (
    <div className="rounded-2xl p-6 bg-white shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
      <h3 className="text-2xl font-extrabold text-gray-900 mb-4">{task.title}</h3>

      {task.description && (
        <p className="text-gray-700 mb-5 leading-relaxed">{task.description}</p>
      )}

      <div className="flex justify-between items-center">
        <span
          className={`px-4 py-1 rounded-full text-sm font-semibold ${
            task.status === "Completed"
              ? "bg-green-500 text-white shadow-md"
              : task.status === "In Progress"
              ? "bg-yellow-400 text-gray-900 shadow-md"
              : "bg-red-500 text-white shadow-md"
          }`}
        >
          {task.status || "Pending"}
        </span>

        <button
          onClick={() => onEdit(task.id)}
          className="px-5 py-2 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 shadow-lg transition"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
