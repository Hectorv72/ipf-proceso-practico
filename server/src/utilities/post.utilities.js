import { faker } from "@faker-js/faker";
import Post from "../models/post.model.js";
import { getRandomCareers } from "./career.utilities.js";
import { randomBoolean } from "./general.utilities.js";
import { getRandomUsers } from "./user.utilities.js";

export const getPosts = async (filters) => {
  const find_filters = {}
  if (filters) {
    const { sender, clasroom, type } = filters

    clasroom && (find_filters.clasroom = clasroom)
    sender && (find_filters.sender = sender)
    type && (find_filters.type = type)
  }

  return await Post.find(find_filters)
    .populate({
      path: 'sender',
      select: '_id username email active personal_info'
    })
    .populate({
      path: 'career',
      select: 'name date'
    })
}

export const getPostById = async (id) => {
  return await Post.findById(id)
    .populate({
      path: 'sender',
      select: '_id username email active personal_info'
    })
    .populate({
      path: 'career',
      select: 'name date'
    })
}

export const createNewPost = async (data) => {
  const { header, message, type, career, sender, clasroom } = data;

  const post = new Post({ header, message, type, career, sender, clasroom });
  await post.save();
  return await post.populate({
    path: 'sender',
    select: '_id username email active personal_info'
  })
  // return post;
}

export const updateOnePost = async (data) => {
  const { header, message, type, career, sender, clasroom } = data;
  const update = {};

  clasroom && (update.clasroom = clasroom);
  message && (update.message = message);
  sender && (update.sender = sender);
  header && (update.header = header);
  career && (update.career = career);
  type && (update.type = type);

  // Verifica que exista alguna modificación para realizar
  if (Object.entries(update).length > 0) {
    return await Post.findByIdAndUpdate(id, update, { new: true });
  } else {
    return null;
  }
}

export const removeOnePost = async (id) => {
  return await Post.findByIdAndDelete(id);
}

export const clearPosts = async () => {
  return await Post.deleteMany();
}

export const generateRandomPost = async () => {

  const header = faker.lorem.sentence(5);
  const message = faker.lorem.paragraph(3);
  const sender = (await getRandomUsers(1))[0]._id
  console.log(randomBoolean())
  const career = randomBoolean() ? (await getRandomCareers(1))[0]._id : undefined
  const type = 'aviso'
  return ({
    header,
    message,
    type,
    career,
    sender
  })
}

export const generateRandomPosts = async (count) => {
  const listPosts = []

  for (let loop = 0; loop < count; loop++) {
    const random = await generateRandomPost();
    const post = await createNewPost(random);
    listPosts.push(post);
  }
  return listPosts
}