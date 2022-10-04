import { body, check } from 'express-validator'

// Schema de verifiacion de existencia

const checksRequired = [
  { key: 'career', msg: 'El nombre de la carrera es requerido' },
  { key: 'capacity', msg: 'El cupo de alumnos es requerido' },
];

export const RequiredSchema = checksRequired.map(
  ({ key, msg }) => check(key).exists().withMessage(msg)
);

// Schema del curso

export const Schema = [
  check('career')
    .if(body('career').notEmpty())
    .isLength({ min: 5, max: 50 }).withMessage('El nombre de la carrera es muy corta'),
  check('capacity')
    .if(body('capacity').notEmpty())
    .isInt({ min: 5, max: 500 }).withMessage('El cupo está fuera de los limites permitidos (5-500)'),
]