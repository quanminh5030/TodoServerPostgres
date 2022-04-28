import express from "express";

import {
  getAllTodo,
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
} from "../controller/todo.controller";

const router = express.Router();

router.get("/", getAllTodo);
router.get("/:todoId", getTodo);
router.post("/", createTodo);
router.put("/:todoId", updateTodo);
router.delete("/:todoId", deleteTodo);

export default router;
