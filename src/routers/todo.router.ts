import express from "express";

import { getAllTodo, createTodo } from "../controller/todo.controller";

const router = express.Router();

router.get("/", getAllTodo);
router.post("/", createTodo);

export default router;
