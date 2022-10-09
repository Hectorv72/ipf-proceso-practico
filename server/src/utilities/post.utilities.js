import Post from "../models/post.model.js";

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
      path: 'clasroom',
      select: '_id career date'
    })
}

export const getPostById = async (id) => {
  return await Post.findById(id)
    .populate({
      path: 'sender',
      select: '_id username email active personal_info'
    })
    .populate({
      path: 'clasroom',
      select: '_id career date'
    })
}

export const createNewPost = async (data) => {
  const { header, message, type, sender, clasroom } = data;

  const post = new Post({ header, message, type, sender, clasroom });
  await post.save();
  return post;
}

export const updateOnePost = async (data) => {
  const { header, message, type, sender, clasroom } = data;
  const update = {};

  clasroom && (update.clasroom = clasroom);
  message && (update.message = message);
  sender && (update.sender = sender);
  header && (update.header = header);
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