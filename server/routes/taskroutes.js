const express = require("express");
const router = express.Router();


const{getTask}=require("../controllers/getTasks");
const{createTask}=require("../controllers/createTasks");
const{updateTask}=require("../controllers/updateTasks");
const { auth } = require("../middlewares/auth");




router.get("/", auth, getTask); 
router.post("/", auth, createTask);
router.put("/:id", auth, updateTask);

module.exports = router;
