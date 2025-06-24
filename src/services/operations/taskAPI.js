import { apiConnector } from "../apiconnector";
import { taskEndpoints } from "../apis";  // Assuming your backend endpoints are here
import { toast } from "react-hot-toast";
import { Dispatch } from "react-redux";
const {CREATE_TASK_API,
  FETCH_TASKS_API,
  UPDATE_TASK_API} = taskEndpoints;  // e.g. "/tasks"



export const fetchTasks = () => {
  return async (dispatch) => {
    dispatch({ type: "tasks/fetchStart" }); // start loading
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const response = await apiConnector(
        "GET",
        FETCH_TASKS_API,
        null,
        { Authorization: `Bearer ${token}` }
      );

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      dispatch({ type: "tasks/fetchSuccess", payload: response.data.tasks });
    } catch (error) {
      console.error("Error fetching tasks: ", error);
      dispatch({ type: "tasks/fetchFailure", payload: error.message });
    }
  };
};





export const createTask = (title) => {
  return async (dispatch, getState) => {
    const toastId = toast.loading("Creating Task...");
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const response = await apiConnector(
        "POST",
        CREATE_TASK_API,
        { title },
        {
          Authorization: `Bearer ${token}`,
        }
      );

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Task Created");
      // Optionally: dispatch(addTask(response.data.task)); if you want to update Redux state
    } catch (error) {
      console.error("CREATE_TASK API ERROR:", error);
      toast.error(error.response?.data?.message || "Failed to create task");
    } finally {
      toast.dismiss(toastId);
    }
  };
};






export const updateTask = ({ id, title, status }) => {
  return async (dispatch) => {
    const toastId = toast.loading("Updating Task...");
    try {
      const token = JSON.parse(localStorage.getItem("token"));

      const response = await apiConnector(
        "PUT",
        `${UPDATE_TASK_API}/${id}`,
        { title, status },
        {
          Authorization: `Bearer ${token}`,
        }
      );

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Task Updated");
      // Optionally: dispatch(updateTaskInRedux(response.data.task));
    } catch (error) {
      console.error("UPDATE_TASK API ERROR:", error);
      toast.error(error.response?.data?.message || "Update failed");
    } finally {
      toast.dismiss(toastId);
    }
  };
};