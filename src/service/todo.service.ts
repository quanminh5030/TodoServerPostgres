import TodoModel, { TodoType } from "../model/todo.model";

const findAllTodo = async () => {
  const allTodo = await TodoModel.findAll();
  return allTodo;
};

const findTodo = async (todoId: number) => {
  const foundTodo = await TodoModel.findOne({ where: { id: todoId } });

  if (!foundTodo) throw Error("Todo does not exist!");

  return foundTodo;
};

const createTodo = async (descptionData: string) => {
  const newTodo = await TodoModel.create({ description: descptionData });
  return newTodo;
};

const updateTodo = async (data: TodoType, id: number) => {
  await findTodo(id);
  await TodoModel.update(data, { where: { id: id } });

  const newUpdateTodo = await findTodo(id);

  return newUpdateTodo;
};

const deleteTodo = async (id: number) => {
  await findTodo(id);
  await TodoModel.destroy({ where: { id: id } });
};

export default { findAllTodo, createTodo, findTodo, updateTodo, deleteTodo };
