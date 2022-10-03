import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'

export const getUsers = async (filters) => {
  const find_filters = {}
  if (filters) {
    const { username, email, type, active } = filters

    username && (find_filters.username = { '$regex': username })
    email && (find_filters.email = email)
    type && (find_filters.type = type)
    active && (find_filters.active = active)
  }

  return await User.find(find_filters)
}

export const getUserById = async (id) => {
  const users = await User.findById(id);
  return users.map(
    user => user.toJsonResponse()
  );
}

export const createNewUser = async (data) => {
  let { password } = data;
  const { username, email, type, personal_info } = data;
  const salt = bcryptjs.genSaltSync(10);
  password = bcryptjs.hashSync(password, salt);

  const user = new User({ username, password, email, type, personal_info });
  await user.save();
  return user.toJsonResponse();
}

export const updateOneUser = async (data) => {
  const { email, username, type, active, personal_info, id } = data;
  const update = {};

  personal_info && (update.personal_info = personal_info);
  username && (update.username = username);
  active && (update.active = active);
  email && (update.email = email);
  type && (update.type = type);

  // Verifica que exista alguna modificación para realizar
  if (Object.entries(update).length > 0) {
    const user = await User.findByIdAndUpdate(id, update, { new: true });
    return user;
  } else {
    return null;
  }
}

export const deactivateOneUser = async (id) => {
  return await User.findByIdAndUpdate(id, { active: false }, { new: true });
}

export const removeOneUser = async (id) => {
  return await User.findByIdAndDelete(id);
}