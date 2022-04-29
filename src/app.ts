import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import db from "./config/db";
import todoRoute from "./routers/todo.router";
import userRouter from "./routers/user.router";
import apiErrorHandler from "./middleware/errorHandler";

dotenv.config();

const app = express();

//Check if data connected
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log(err));

// Express Config
app.set("port", process.env.PORT || 5000);

// Midleware
app.use(express.json());
app.use(cors());

// Route
app.use("/health", (req, res, next) => {
  res.status(200).send("Server is running");
});

app.use("/todo", todoRoute);
app.use("/user", userRouter);

// Error handling
app.use(apiErrorHandler);

export default app;
