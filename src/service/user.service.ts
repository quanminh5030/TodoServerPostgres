import UserModel, { UserType } from "../model/user.model";
import { NotFoundError } from "../middleware/errorHandler";

const findAllUser = async () => {
  const allUser = await UserModel.findAll();

  return allUser;
};

const findUser = async (id: string) => {
  const foundUser = await UserModel.findOne({ where: { id: id } });

  if (!foundUser) throw new NotFoundError("User does not exist.");

  return foundUser;
};

const createUser = async (data: UserType) => {
  const newUser = await UserModel.create(data);

  return newUser;
};

const updateUser = async (data: UserType, id: string) => {
  await findUser(id);
  await UserModel.update(data, { where: { id: id } });

  const newUpdateUser = await findUser(id);

  return newUpdateUser;
};

const deleteUser = async (id: string) => {
  await findUser(id);
  await UserModel.destroy({ where: { id: id } });
};

export default { findAllUser, findUser, createUser, updateUser, deleteUser };
