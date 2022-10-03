import jwt from 'jsonwebtoken'

export const catchHandler = (error, message) => {
  console.log(`Error al ${message} =>`, error)
  return { status: 500, message: 'Ocurrió un error inesperado, vuelva a intentarlo más tarde' }
}

export const errorsToObject = (errors) => {
  const new_errors = {}
  errors.array().forEach(
    (error) => {
      new_errors[error.param] = error.msg
    }
  )
  return new_errors
}



export const createJwt = (id) => {
  if (!id) {
    return new Error;
  } else {
    const payload = { id };
    return new Promise((resolve, reject) => {
      const secret = process.env.SECRET || 'SECRET'
      try {
        resolve(jwt.sign(payload, secret));
      } catch (error) {
        reject(error)
      }
    });
  }
};