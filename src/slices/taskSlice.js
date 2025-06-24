





// src/redux/slices/tasksSlice.js
const initialState = {
  list: [],
  loading: false,
  error: null,
};

export default function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case "tasks/fetchStart":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "tasks/fetchSuccess":
      return {
        ...state,
        list: action.payload,
        loading: false,
        error: null,
      };
    case "tasks/fetchFailure":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
