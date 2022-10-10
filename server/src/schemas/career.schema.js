import { body, check } from 'express-validator'

// Schema de verifiacion de existencia

const checksRequired = [
  { key: 'name', msg: 'El nombre de la materia es requerido' },
  { key: 'date', msg: 'La fecha de inicio es requerida' },
  { key: 'duration', msg: 'La duración es requerida' },
  { key: 'calendar', msg: 'El calendario de materias es requerido' },
];

export const RequiredSchema = checksRequired.map(
  ({ key, msg }) => check(key).exists().withMessage(msg)
);

// Schema del curso

export const Schema = [
  check('name')
    .if(body('name').notEmpty())
    .isLength({ min: 5, max: 50 }).withMessage('El nombre de la materia es muy corta'),
  check('duration')
    .if(body('duration').notEmpty())
    .isInt({ min: 1 }).withMessage('La duración de la carrera es muy poca'),
  check('calendar')
    .if(body('calendar').notEmpty())
    .isLength({ min: 1 }).withMessage('La carrera debe contener un calendario de materias'),
]