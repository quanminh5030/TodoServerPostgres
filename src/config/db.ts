import { Sequelize } from "sequelize";
import { Client } from "pg";

const db = new Sequelize({
  dialect: "postgres",
  username: "postgres",
  password: "123456",
  database: "todo_test",
  host: "localhost",
  port: 4321,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

export default db;
