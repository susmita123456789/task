



import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../services/operations/taskAPI"; // your thunk
import TaskCard from "../components/core/Tasks/TaskCard";
import { useNavigate } from "react-router-dom";

const Tasks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { list: tasks = [], loading, error } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleEdit = (taskId) => {
    navigate(`/dashboard/tasks/edit/${taskId}`);
  };

  const handleCreate = () => {
    navigate("/dashboard/tasks/create");
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Task Dashboard</h1>
        <button
          onClick={handleCreate}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          + New Task
        </button>
      </div>

      {loading && <p className="text-center text-gray-500">Loading tasks...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}
      {!loading && tasks.length === 0 && (
        <>
          <p className="text-center text-gray-400 mt-8">No tasks available.</p>
          <p className="text-center text-gray-400 mb-8">Click + New Task to get started.</p>
        </>
      )}

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onEdit={handleEdit} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
