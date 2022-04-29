import { Sequelize, DataTypes } from "sequelize";
import db from "../config/db";
import Todo from "./todo.model";

const User = db.define("user", {
  firstName: {
    type: DataTypes.STRING,
    validate: {
      isAlpha: true,
      notEmpty: true,
      notNull: true,
    },
  },
  lastName: {
    type: DataTypes.STRING,
    validate: {
      isAlpha: true,
      notEmpty: true,
      notNull: true,
    },
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    validate: {
      isEmail: true,
      notEmpty: true,
      notNull: true,
    },
  },
  register: {
    type: DataTypes.STRING,
    defaultValue: "app-system",
    validate: {
      isIn: [["app-system", "google", "facebook", "github"]],
    },
  },
  password: {
    type: DataTypes.STRING,
    validate: {
      len: [6, 20],
      is: /^[a-z]+$/i,
    },
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
  register: string;
  username: string;
  password: string;
};

export default User;
