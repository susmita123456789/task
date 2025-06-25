// import axios from "axios"

// export const axiosInstance = axios.create({});

// export const apiConnector = (method, url, bodyData, headers, params) => {
//     return axiosInstance({
//         method:`${method}`,
//         url:`${url}`,
//         data: bodyData ? bodyData : null,
//         headers: headers ? headers: null,
//         params: params ? params : null,
//     });
// }





// import axios from "axios";

// export const axiosInstance = axios.create({});

// export const apiConnector = (method, url, bodyData, headers, params) => {
//     return axiosInstance({
//         method: `${method}`,
//         url: `${url}`,
//         data: bodyData ? bodyData : null,
//         headers: headers ? headers : null,
//         params: params ? params : null,
//     });
// }



import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:4000/api/v1";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,       // Base URL for all requests
  withCredentials: true,   // Send cookies/auth headers if needed
});

export const apiConnector = (method, url, bodyData, headers, params) => {
  return axiosInstance({
    method,                // HTTP method (GET, POST, etc.)
    url,                   // Relative URL (e.g., "/auth/sendotp")
    data: bodyData || null, 
    headers: headers || null,
    params: params || null,
  });
};



