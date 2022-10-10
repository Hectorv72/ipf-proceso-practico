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