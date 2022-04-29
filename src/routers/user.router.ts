import express from "express";
import passport from "passport";
import adminCheck from "../middlewares/checkAdmin";

import {
  getAllUser,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  googleLogin,
} from "../controller/user.controller";

const router = express.Router();

router.post(
  "/google-login",
  passport.authenticate(
    "google-id-token",
    {
      session: false,
    },
    googleLogin
  )
);

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  adminCheck,
  getAllUser
);

router.get(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  getUser
);

router.post("/", createUser); //We should put more logic in here (check if account already exists)

router.put(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  adminCheck,
  updateUser
);

router.delete(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  adminCheck,
  deleteUser
);

export default router;
