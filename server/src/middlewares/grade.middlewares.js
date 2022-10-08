import { RequiredSchema, Schema } from "../schemas/grade.schema.js";
import { validationError } from "./general.middlewares.js";

export const verifyGradeFormat = [
  Schema,
  validationError
]

export const requiredGradeFormat = [
  RequiredSchema,
  validationError
]