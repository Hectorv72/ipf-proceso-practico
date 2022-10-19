import User from '../models/user.model.js'

export const findUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email })
    if (user) {
      return Promise.reject('El email ya está en uso')
    }
  } catch (error) {
    return Promise.reject('Ocurrió un error al verificar el email, vuelva a intentarlo más tarde')
  }
}

export const findUserByUsername = async (username) => {
  try {
    const user = await User.findOne({ username })
    if (user) {
      return Promise.reject('El nombre de usuario ya está en uso')
    }
  } catch (error) {
    return Promise.reject('Ocurrió un error al verificar el usuario, vuelva a intentarlo más tarde')
  }
}