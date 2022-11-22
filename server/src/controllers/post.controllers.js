import { clearPosts, createNewPost, generateRandomPosts, getPosts, removeOnePost, updateOnePost } from "../utilities/post.utilities.js";
import { catchHandler } from "../utilities/general.utilities.js";

export const findPosts = async (req, res) => {
  try {
    const posts = await getPosts(req.query);
    return res.status(200).json({ message: 'Busqueda de posts realizada correctamente', posts });
  } catch (error) {
    const { status, message } = catchHandler(error, 'buscar posts');
    return res.status(status).json({ message });
  }
}

export const createPost = async (req, res) => {
  const { _id: sender } = req.user
  const data = { ...req.body, sender }
  try {
    const post = await createNewPost(data);
    return res.status(201).json({ message: 'Post creada correctamente', post });
  } catch (error) {
    const { status, message } = catchHandler(error, 'crear post');
    return res.status(status).json({ message });
  }
}

export const updatePost = async (req, res) => {
  try {
    const post = await updateOnePost(req.body);
    if (post) {
      return res.status(200).json({ message: 'Post actualizada correctamente', post });
    } else {
      return res.status(400).json({ message: 'No se realizó ninguna modificación' })
    }
  } catch (error) {
    const { status, message } = catchHandler(error, 'modificar post');
    return res.status(status).json({ message });
  }
}

export const deletePost = async (req, res) => {
  try {
    const { id } = req.body;
    const post = await removeOnePost(id);
    if (post) {
      return res.status(200).json({ message: 'La post se eliminó correctamente', post });
    } else {
      return res.status(400).json({ message: 'La post no existe' })
    }
  } catch (error) {
    const { status, message } = catchHandler(error, 'eliminar post');
    return res.status(status).json({ message });
  }
}

export const clearAllPosts = async (req, res) => {
  try {
    await clearPosts();
    return res.status(200).json({ message: 'Todos los posts se eliminaron satisfactoriamente' })
  } catch (error) {
    const { status, message } = catchHandler(error, 'remover todos los posts');
    return res.status(status).json({ message });
  }
}

export const factoryPosts = async (req, res) => {
  try {
    // Setea la cantidad de veces que generaran carreras
    let count = 50;
    const { vol } = req.body
    vol && (count = parseInt(vol))

    const posts = await generateRandomPosts(count)
    res.status(200).json({
      message: `Se han generado ${count} Posts`,
      posts
    })
  } catch (error) {
    const { status, message } = catchHandler(error, 'generar random posts');
    return res.status(status).json({ message });
  }
}