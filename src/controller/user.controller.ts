import { Request, Response, NextFunction } from "express";

import UserService from "../service/user.service";
import { BadRequestError } from "../middleware/errorHandler";

const getAllUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allUser = await UserService.findAllUser();

    return res.status(200).json(allUser);
  } catch (error) {
    if (error instanceof Error && error.name == "SequelizeValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.userId;
    const user = await UserService.findUser(id);

    return res.status(200).json(user);
  } catch (error) {
    if (error instanceof Error && error.name == "SequelizeValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newUser = await UserService.createUser(req.body);

    return res.status(200).json(newUser);
  } catch (error: any) {
    if (error instanceof Error && error.name == "SequelizeValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.params.userId;
    const data = req.body;
    const updateUser = await UserService.updateUser(data, userId);

    return res.status(200).json(updateUser);
  } catch (error) {
    if (error instanceof Error && error.name == "SequelizeValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.params.userId;
    await UserService.deleteUser(userId);

    res.status(204).end();
  } catch (error) {
    if (error instanceof Error && error.name == "SequelizeValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

export { getAllUser, getUser, createUser, updateUser, deleteUser };
