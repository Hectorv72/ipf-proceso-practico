import { RequiredSchema, Schema } from "../schemas/classroom.schema.js";
import { validationError } from "./general.middlewares.js";

export const verifyClassroomFormat = [
  Schema,
  validationError
]

export const requiredClassroomFormat = [
  RequiredSchema,
  validationError
]