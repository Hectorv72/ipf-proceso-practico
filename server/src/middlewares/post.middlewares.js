import { RequiredSchema, Schema } from "../schemas/post.schema.js";
import { validationError } from "./general.middlewares.js";

export const verifyPostFormat = [
  Schema,
  validationError
]

export const requiredPostFormat = [
  RequiredSchema,
  validationError
]