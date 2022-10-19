import { catchHandler } from "../utilities/general.utilities.js";
import { getUsers, createNewUser, updateOneUser, deactivateOneUser, removeOneUser, clearUsers, generateRandomUsers, getRandomUsers } from "../utilities/user.utilities.js"

export const findUsers = async (req, res) => {
  try {
    const users = (await getUsers(req.query)).map(
      user => user.toJsonResponse()
    );
    return res.status(200).json({ message: 'Busqueda de usuarios realizada correctamente', users });
  } catch (error) {
    const { status, message } = catchHandler(error, 'buscar usuarios');
    return res.status(status).json({ message });
  }
}

export const findRandomUser = async (req, res) => {
  try {
    const user = await getRandomUsers(1)[0];
    return res.status(200).json({ message: 'Busqueda de usuario realizada correctamente', user });
  } catch (error) {
    const { status, message } = catchHandler(error, 'buscar usuario random');
    return res.status(status).json({ message });
  }
}

export const createUser = async (req, res) => {
  try {
    const user = (await createNewUser(req.body)).toJsonResponse();
    return res.status(201).json({ message: 'Usuario creado correctamente', user });
  } catch (error) {
    const { status, message } = catchHandler(error, 'crear usuario');
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
    const { status, message } = catchHandler(error, 'modificar usuario');
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
    const { status, message } = catchHandler(error, 'eliminar usuario');
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
    const { status, message } = catchHandler(error, 'remover usuario');
    return res.status(status).json({ message });
  }
}

export const clearAllUsers = async (req, res) => {
  try {
    await clearUsers();
    return res.status(200).json({ message: 'Todos los usuarios se eliminaron satisfactoriamente' })
  } catch (error) {
    const { status, message } = catchHandler(error, 'remover todos los usuarios');
    return res.status(status).json({ message });
  }
}

export const factoryUsers = async (req, res) => {
  try {
    // Setea la cantidad de veces que generara usuarios
    let count = 50;
    const { vol } = req.body
    vol && (count = parseInt(vol))

    const users = await generateRandomUsers(count)
    res.status(200).json({
      message: `Se han generado ${count} Usuarios`,
      users
    })
  } catch (error) {
    const { status, message } = catchHandler(error, 'generar random usuarios');
    return res.status(status).json({ message });
  }
}