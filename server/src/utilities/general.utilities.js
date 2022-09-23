export const catchHandler = (error) => {
  return { status: 500, message: 'Ocurrió un error inesperado, vuelva a intentarlo más tarde' }
}