import { RequiredSchema, Schema } from "../schemas/absence.schema.js";
import { validationError } from "./general.middlewares.js";

export const verifyAbsenceFormat = [
  Schema,
  validationError
]

export const requiredAbsenceFormat = [
  RequiredSchema,
  validationError
]