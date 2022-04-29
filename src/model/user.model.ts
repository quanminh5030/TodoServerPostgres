import { DataTypes } from "sequelize";
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
    unique: true,
  },
  register: {
    type: DataTypes.STRING,
  },
  username: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
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
  username: string | null;
  password: string | null;
};

export default User;
