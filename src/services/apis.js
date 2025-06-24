const BASE_URL = process.env.REACT_APP_BASE_URL||"http://localhost:4000/api/v1"
console.log("PRINTING URL",BASE_URL)

// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
}



export const taskEndpoints = {
  CREATE_TASK_API: BASE_URL + "/tasks",
  FETCH_TASKS_API: BASE_URL + "/tasks",
  UPDATE_TASK_API: BASE_URL + "/tasks",
}



// PROFILE ENDPOINTS
export const profileEndpoints = {
  GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",
  GET_USER_ENROLLED_COURSES_API: BASE_URL + "/profile/getEnrolledCourses",
}



// CATAGORIES API
export const categories = {
  CATEGORIES_API: BASE_URL + "/course/showAllCategories",
}
