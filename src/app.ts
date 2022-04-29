import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";

import db from "./config/db";
import todoRoute from "./routers/todo.router";
import userRouter from "./routers/user.router";
<<<<<<< HEAD
import { googleStrategy } from "./config/passport";
=======
import apiErrorHandler from "./middleware/errorHandler";
>>>>>>> be36f8902ebe6c198923396fca8b84dfe154abd2

dotenv.config();

const app = express();

//Check if data connected
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log(err));

// Express Config
app.set("port", process.env.PORT || 5000);

// Midleware
app.use(cors());
app.use(express.json());

// Passport configuration
app.use(passport.initialize());
passport.use(googleStrategy);

// Route
app.use("/health", (req, res, next) => {
  res.status(200).send("Server is running");
});

app.use("/todo", todoRoute);
app.use("/user", userRouter);

<<<<<<< HEAD
=======
// Error handling
app.use(apiErrorHandler);
>>>>>>> be36f8902ebe6c198923396fca8b84dfe154abd2

export default app;
