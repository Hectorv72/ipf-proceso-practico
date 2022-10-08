import { body, check } from 'express-validator'
import { gradeTypes } from '../models/grade.model';

// Schema de verifiacion de existencia

const checksRequired = [
  { key: 'date', msg: 'La fecha de la calificación es requerida' },
  { key: 'student', msg: 'El estudiante es requerido' },
  { key: 'subject', msg: 'La materia es es requerida' },
  { key: 'description', msg: 'La descripción es requerida' },
  { key: 'rate', msg: 'La calificación es requerida' },
  { key: 'type', msg: 'El tipo de calificación requerido' },
];

export const RequiredSchema = checksRequired.map(
  ({ key, msg }) => check(key).exists().withMessage(msg)
);

// Schema del curso

export const Schema = [
  check('description')
    .if(body('description').notEmpty())
    .isLength({ min: 5, max: 500 }).withMessage('La descripción debe tener un min de 5, y un max de 500 caracteres'),
  check('rate')
    .if(body('rate').notEmpty())
    .isInt({ min: 0, max: 100 }).withMessage('La calificación debe estar entre 0-100'),
  check('type')
    .if(body('type').notEmpty())
    .isIn(gradeTypes).withMessage('El tipo de calificación no existe'),
]