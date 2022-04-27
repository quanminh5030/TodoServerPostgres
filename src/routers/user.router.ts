import express from "express";

import { getAllUser, createUser } from "../controller/user.controller";

const router = express.Router();

router.get("/", getAllUser);
router.post("/", createUser);

export default router;
