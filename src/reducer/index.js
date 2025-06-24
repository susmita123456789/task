import {combineReducers} from "@reduxjs/toolkit";

import authReducer from "../slices/authSlice"
import profileReducer from "../slices/profileSlice";

import tasksReducer from "../slices/taskSlice";

const rootReducer  = combineReducers({
    auth: authReducer,
    tasks:tasksReducer,
    profile:profileReducer,
    
})

export default rootReducer