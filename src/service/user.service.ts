import UserModel, { UserType } from "../model/user.model";

const findAllUser = async () => {
  const allUser = await UserModel.findAll();
  return allUser;
};

const findUser = async (id: string) => {
  const user = await UserModel.findOne({ where: { id: id } });

  if (!user) throw Error("User does not exist.");

  return user;
};

const createUser = async (data: UserType) => {
  const newUser = await UserModel.create(data);
  return newUser;
};

export default { findAllUser, findUser, createUser };
