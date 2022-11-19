import bcryptjs from 'bcryptjs'
import User from '../models/user.model.js'
import jwt from 'jsonwebtoken'

// Login Middlewares
export const verifyJWT = async (req, res, next) => {
  const token = req.header('x-auth-token')
  //check token
  if (!token) {
    return res.status(401).json({ message: 'no token, unauthorized' })
  }

  try {
    const { id } = jwt.verify(token, process.env.SECRET)
    const user = await User.findById(id)
    if (user) {
      req.user = user
      return next()
    }
    return res.status(400).json({ message: 'no user' })

  } catch (error) {
    console.log('error en verificacion de token => ', error)
    res.status(401).json({ message: 'unvalid token' })
  }

}

export const verifyUserExistence = async (req, res, next) => {
  try {
    const { email } = req.body;
    // Busca el usuario con ese email
    const user = await User.findOne({ email })
    if (user) {
      const { password } = req.body
      req.body = { password, user }
      return next();
    }
    return res.status(400).json({ message: 'No existe el usuario', type: 'email' })
  } catch (error) {
    console.log('error en verificacion de existencia de usuario => ', error)
    return res.status(500).json({ message: 'Ocurrió un error inesperado, vuelva a intentarlo mas tarde' })
  }
}

export const verifyUserPassword = async (req, res, next) => {
  try {
    const { user, password } = req.body
    // verifica la contraseña y el hash
    const validation = bcryptjs.compareSync(password, user.password)
    if (validation) {
      const jsonUser = user.toJsonResponse();
      req.body = { user: jsonUser };
      return next();
    }
    return res.status(400).json({ message: 'Contraseña incorrecta', type: 'password' })
  } catch (error) {
    console.log('error en verificacion de password => ', error)
    return res.status(500).json({ message: 'Ocurrió un error inesperado, vuelva a intentarlo mas tarde' })
  }
}