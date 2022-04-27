import UserModel, { UserType } from "../model/user.model";

const findAllUser = async () => {
  const allUser = await UserModel.findAll();
  return allUser;
};

const createUser = async (data: UserType) => {
  const newUser = await UserModel.create(data);
  return newUser;
};

export default { findAllUser, createUser };
