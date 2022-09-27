import { catchHandler } from "../utilities/general.utilities.js";
import { getUsers, createNewUser, updateOneUser, deactivateOneUser } from "../utilities/user.utilities.js"

export const findUsers = async (_, res) => {
  try {
    const users = await getUsers();
    return res.status(200).json({ message: 'Busqueda de usuarios realizada correctamente', users });
  } catch (error) {
    console.log('Error al crear buscar usuarios =>', error);
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

export const updateUser = async () => {
  try {
    const user = await updateOneUser(req.body);
    if( user ){
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

export const deleteUser = async () => {
  try {
    const { id } = req.body;
    const user = await deactivateOneUser(id);
    return res.status(200).json({ message: 'El usuario se desactivó correctamente', user });
  } catch (error) {
    console.log('Error al eliminar usuario =>', error);
    const { status, message } = catchHandler(error);
    return res.status(status).json({ message });
  }
}

export const removeUser = async () => {
  try {
    const { id } = req.body;
    const user = await removeOneUser(id);
    return res.status(200).json({ message: 'El usuario se removió correctamente', user });
  } catch (error) {
    console.log('Error al remover usuario =>', error);
    const { status, message } = catchHandler(error);
    return res.status(status).json({ message });
  }
}