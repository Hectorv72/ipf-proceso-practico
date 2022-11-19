import { catchHandler, createJwt } from '../utilities/general.utilities.js'
import { createNewUser } from "../utilities/user.utilities.js";

export const authUser = async (req, res) => {
  const { user } = req
  const { id } = user;
  const token = await createJwt(id);
  return res.status(200).json({ message: 'Bienvenido', user, token });
}

export const signInUser = async (req, res) => {
  try {
    // El usuario ya obtenido por medio de los middlewares
    const { user } = req.body
    // Obtiene los datos del usuario
    const { id } = user;
    // Crea el token y lo devuelve al usuario
    const token = await createJwt(id);
    return res.status(200).json({ message: 'Bienvenido', user, token });
  } catch (error) {
    const { status, message } = catchHandler(error, 'loguear el usuario');
    return res.status(status).json({ message });
  }
}

export const signUpUser = async (req, res) => {
  try {
    const user = createNewUser(req.body);
    const { id } = user;
    const token = await createJwt(id);
    return res.status(201).json({ message: 'Usuario creado correctamente', user, token });
  } catch (e) {
    const { status, message } = catchHandler(error, 'registrar usuario');
    return res.status(status).json({ message });
  }
}