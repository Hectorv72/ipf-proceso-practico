import { body, check } from 'express-validator'

// Schema de verifiacion de existencia

const checksRequired = [
  { key: 'date', msg: 'La fecha es requerida' },
  { key: 'subject', msg: 'La materia es requerida' },
  { key: 'students', msg: 'La lista de alumnos es requerida' },
];

export const RequiredSchema = checksRequired.map(
  ({ key, msg }) => check(key).exists().withMessage(msg)
);

// Schema del curso

export const Schema = [
  check('subject')
    .if(body('subject').notEmpty())
    .isMongoId().withMessage('Debe ingresar una materia')
]