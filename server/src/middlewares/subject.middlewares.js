import { RequiredSchema, Schema } from "../schemas/subject.schema.js";
import { validationError } from "./general.middlewares.js";

export const verifySubjectFormat = [
  Schema,
  validationError
]

export const requiredSubjectFormat = [
  RequiredSchema,
  validationError
]