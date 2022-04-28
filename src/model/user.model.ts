import { Sequelize, DataTypes } from "sequelize";
import db from "../config/db";
import Todo from "./todo.model";

const User = db.define("user", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  register: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
});

User.hasMany(Todo, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Todo.belongsTo(User, { constraints: true, foreignKeyConstraint: true });

export type UserType = {
  firstName: string;
  lastName: string;
  email: string;
  register: string | null;
  username: string;
  password: string;
};

export default User;
