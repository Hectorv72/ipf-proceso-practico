import { validationResult } from 'express-validator'
import { errorsToObject } from "../utilities/general.utilities.js";

export const validationError = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorsParsed = errorsToObject(errors)
    return res.status(400).json({ message: 'Error al validar los datos', errors: errorsParsed });
  } else {
    return next()
  }
}