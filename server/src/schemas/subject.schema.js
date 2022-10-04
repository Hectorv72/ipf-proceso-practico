import { body, check } from 'express-validator'

// Schema de verifiacion de existencia

const checksRequired = [
  { key: 'name', msg: 'El nombre de la materia es requerido' },
  { key: 'classroom', msg: 'El curso de alumnos es requerido' },
  { key: 'teachers', msg: 'El grupo de profesores es requerido' },
  { key: 'term', msg: 'El periodo de la materia es requerido' },
  { key: 'duration', msg: 'La duración es requerida' },
  { key: 'schedules', msg: 'Los horarios son requeridos' },
];

export const RequiredSchema = checksRequired.map(
  ({ key, msg }) => check(key).exists().withMessage(msg)
);

// Schema del curso

export const Schema = [
  check('name')
    .if(body('name').notEmpty())
    .isLength({ min: 5, max: 50 }).withMessage('El nombre de la materia es muy corta'),
  check('classroom')
    .if(body('classroom').notEmpty())
    .isMongoId().withMessage('Debe ingresar un curso para la materia'),
  check('teachers')
    .if(body('teachers').notEmpty())
    .isLength({ min: 1 }),
  check('term')
    .if(body('term').notEmpty())
    .isString().withMessage('El periodo de tiempo debe contener texto'),
  check('duration')
    .if(body('duration').notEmpty())
    .isInt({ min: 1 }).withMessage('El tiempo de la carrera en horas debe ser un entero'),
  check('schedules')
    .if(body('schedules').notEmpty())
    .isLength({ min: 1 }).withMessage('La materia debe contener horarios')
]