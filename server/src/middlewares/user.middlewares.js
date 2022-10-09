import { RequiredSchema, Schema } from "../schemas/user.schema.js";
import { validationError } from "./general.middlewares.js";

export const verifyUserFormat = [
  Schema,
  validationError
]

export const requiredUserFormat = [
  RequiredSchema,
  validationError
]

export const verifyFactoryVol = (req, res, next) => {
  // Verifica que las vueltas sea un número
  const { vol } = req.body;
  if (vol) {
    if (isNaN(parseInt(vol))) {
      return res.status(400).json({ message: 'Error al insertar la cantidad de loops, solo se admiten números' })
    }
  }
  next();
}