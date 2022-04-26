import { Request, Response, NextFunction } from "express";

import TodoService from "../service/todo.service";

const getAllTodo = async (req: Request, res: Response) => {
  try {
    const allTodos = await TodoService.findAllTodo();
    return res.status(200).json(allTodos);
  } catch (error) {
    console.error(error);
  }
};

const createTodo = async (req: Request, res: Response) => {
  try {
    const { description } = req.body;

    const newTodo = await TodoService.createTodo(description);
    res.status(200).json(newTodo);
  } catch (error) {
    console.error(error);
  }
};

export { getAllTodo, createTodo };
