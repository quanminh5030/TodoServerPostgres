import express from "express";
import passport from "passport";

import {
  getAllTodo,
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
} from "../controller/todo.controller";

const router = express.Router();

router.get("/", passport.authenticate("jwt", { session: false }), getAllTodo);
router.get(
  "/:todoId",
  passport.authenticate("jwt", { session: false }),
  getTodo
);

router.post("/", passport.authenticate("jwt", { session: false }), createTodo);
router.put(
  "/:todoId",
  passport.authenticate("jwt", { session: false }),
  updateTodo
);

router.delete(
  "/:todoId",
  passport.authenticate("jwt", { session: false }),
  deleteTodo
);

export default router;
