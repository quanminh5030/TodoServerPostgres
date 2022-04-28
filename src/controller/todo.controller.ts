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

const getTodo = async (req: Request, res: Response) => {
  try {
    const { todoId } = req.params;
    const todo = await TodoService.findTodo(Number(todoId));

    res.json(todo);
  } catch (error) {
    console.log('Q', error);
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

const updateTodo = async (req: Request, res: Response) => {
  try {
    const { todoId } = req.params;
    const data = req.body;
    const updateTodo = await TodoService.updateTodo(data, Number(todoId));

    return res.json(updateTodo);
  } catch (error) {
    console.log(error);
  }
};

const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { todoId } = req.params;
    await TodoService.deleteTodo(Number(todoId));

    res.status(204).end();
  } catch (error) {
    console.log(error);
  }
};

export { getAllTodo, createTodo, getTodo, updateTodo, deleteTodo };
