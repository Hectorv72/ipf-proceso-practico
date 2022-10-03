import { RequiredSchema, Schema } from "../schemas/class.schema.js";
import { validationError } from "./general.middlewares.js";

export const verifyClassFormat = [
  Schema,
  validationError
]

export const requiredClassFormat = [
  RequiredSchema,
  validationError
]