import express from "express";
import passport from "passport";

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

router.get("/", getAllUser);
router.get("/:userId", getUser);
router.post("/", createUser);
router.put("/:userId", updateUser);
router.delete("/:userId", deleteUser);

export default router;
