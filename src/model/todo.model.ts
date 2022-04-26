import { Sequelize, DataTypes } from "Sequelize";
import db from "../config/db";

const Todo = db.define("todo", {
  description: {
    type: DataTypes.STRING,
  },
});

Todo.sync({ alter: true }).then(() => {
  console.log("Table Todo Created");
});

export default Todo;
