import { Sequelize, DataTypes } from "sequelize";
import db from "../config/db";

const Todo = db.define("todo", {
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isCompleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

Todo.sync({ alter: true }).then(() => {
  console.log("Table Todo Created");
});

export default Todo;

export type TodoType = {
  description: string;
  isCompleted: boolean;
};
