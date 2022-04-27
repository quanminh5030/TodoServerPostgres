import express from "express";

import { getAllUser, getUser, createUser } from "../controller/user.controller";

const router = express.Router();

router.get("/", getAllUser);
router.get("/:userId", getUser);
router.post("/", createUser);

export default router;
