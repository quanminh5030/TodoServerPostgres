import { Request, Response, NextFunction } from "express";

import UserService from "../service/user.service";

const getAllUser = async (req: Request, res: Response) => {
  try {
    const allUser = await UserService.findAllUser();
    return res.status(200).json(allUser);
  } catch (error) {
    console.error(error);
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = await UserService.createUser(req.body);
    res.status(200).json(newUser);
  } catch (error) {
    console.error(error);
  }
};

export { getAllUser, createUser };
