import { body, check } from 'express-validator'

// Schema de verifiacion de existencia

const checksRequired = [
  { key: 'name', msg: 'El nombre de la materia es requerido' },
  { key: 'teachers', msg: 'El grupo de profesores es requerido' }
]

export const RequiredSchema = checksRequired.map(
  ({ key, msg }) => check(key).exists().withMessage(msg)
);

// Schema del curso

export const Schema = [
  check('name')
    .if(body('name').notEmpty())
    .isLength({ min: 5, max: 50 }).withMessage('El nombre de la materia es muy corta'),
  check('teachers')
    .if(body('teachers').notEmpty())
    .isLength({ min: 1 }).withMessage('Debe contener almenos un profesor')
]