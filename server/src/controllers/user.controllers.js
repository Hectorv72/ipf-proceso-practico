import { catchHandler } from "../utilities/general.utilities.js";
import { getUsers, createNewUser, updateOneUser, deactivateOneUser, removeOneUser } from "../utilities/user.utilities.js"

export const findUsers = async (req, res) => {
  try {
    const users = await getUsers(req.query);
    return res.status(200).json({ message: 'Busqueda de usuarios realizada correctamente', users });
  } catch (error) {
    console.log('Error al buscar usuarios =>', error);
    const { status, message } = catchHandler(error);
    return res.status(status).json({ message });
  }
}

export const createUser = async (req, res) => {
  try {
    const user = await createNewUser(req.body);
    return res.status(201).json({ message: 'Usuario creado correctamente', user });
  } catch (error) {
    console.log('Error al crear usuario =>', error);
    const { status, message } = catchHandler(error);
    return res.status(status).json({ message });
  }
}

export const updateUser = async (req, res) => {
  try {
    const user = await updateOneUser(req.body);
    if (user) {
      return res.status(200).json({ message: 'Usuario actualizado correctamente', user });
    } else {
      return res.status(400).json({ message: 'No se realizó ninguna modificación' })
    }
  } catch (error) {
    console.log('Error al modificar usuario =>', error);
    const { status, message } = catchHandler(error);
    return res.status(status).json({ message });
  }
}

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.body;
    const user = await deactivateOneUser(id);
    if (user) {
      return res.status(200).json({ message: 'El usuario se desactivó correctamente', user });
    } else {
      return res.status(400).json({ message: 'El usuario no existe' })
    }
  } catch (error) {
    console.log('Error al eliminar usuario =>', error);
    const { status, message } = catchHandler(error);
    return res.status(status).json({ message });
  }
}

export const removeUser = async (req, res) => {
  try {
    const { id } = req.body;
    const user = await removeOneUser(id);
    if (user) {
      return res.status(200).json({ message: 'El usuario se removió correctamente', user });
    } else {
      return res.status(400).json({ message: 'El usuario no existe' })
    }
  } catch (error) {
    console.log('Error al remover usuario =>', error);
    const { status, message } = catchHandler(error);
    return res.status(status).json({ message });
  }
}