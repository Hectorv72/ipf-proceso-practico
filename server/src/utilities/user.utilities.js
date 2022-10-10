import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import { faker } from '@faker-js/faker';

export const getUsers = async (filters) => {
  const find_filters = {};
  if (filters) {
    const { username, email, type, active } = filters;

    username && (find_filters.username = { '$regex': username });
    email && (find_filters.email = email);
    type && (find_filters.type = type);
    active && (find_filters.active = active);
  }
  return await User.find(find_filters).populate({
    path: 'absences',
    select: 'date career subject',
    populate: [
      { path: 'career', select: '_id name date' },
      { path: 'subject', select: '_id name' }
    ]
  });
}

export const getUserById = async (id) => {
  return await User.findById(id).populate({
    path: 'absences',
    select: 'date career subject',
    populate: [
      { path: 'career', select: '_id name date' },
      { path: 'subject', select: '_id name' }
    ]
  });
}

export const getRandomUser = async () => {
  return (await User.aggregate([{ $sample: { size: 1 } }]))[0]
}

export const createNewUser = async (data) => {
  let { password } = data;
  const { username, email, type, personal_info } = data;
  const salt = bcryptjs.genSaltSync(10);
  password = bcryptjs.hashSync(password, salt);

  const user = new User({ username, password, email, type, personal_info });
  await user.save();
  return user
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
    return await User.findByIdAndUpdate(id, update, { new: true });
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

export const clearUsers = async () => {
  return await User.deleteMany();
}

export const generateRandomUser = async () => {
  const sex = faker.name.sex()
  const names = faker.name.firstName(sex);
  const surnames = faker.name.lastName(sex);

  return ({
    username: faker.internet.userName(names, surnames),
    email: faker.internet.email(names, surnames),
    password: faker.internet.password(),
    personal_info: {
      names,
      surnames,
      date_birth: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }),
      dni: faker.random.numeric(8),
    }
  })
}

export const generateRandomUsers = async (count) => {
  const listUsers = []
  for (let loop = 0; loop < count; loop++) {
    const random = await generateRandomUser();
    const user = await createNewUser(random);
    listUsers.push(user);
  }
  return listUsers
}