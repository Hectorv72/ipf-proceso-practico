import { RequiredSchema, Schema } from "../schemas/career.schema.js";
import { validationError } from "./general.middlewares.js";

export const verifyCareerFormat = [
  Schema,
  validationError
]

export const requiredCareerFormat = [
  RequiredSchema,
  validationError
]