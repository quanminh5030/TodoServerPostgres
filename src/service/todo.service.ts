import TodoModel from "../model/todo.model";

const findAllTodo = async () => {
  const allTodo = await TodoModel.findAll();
  return allTodo;
};

const createTodo = async (descptionData: string) => {
  const newTodo = await TodoModel.create({ description: descptionData });
  return newTodo;
};

export default { findAllTodo, createTodo };
