import { body, check } from 'express-validator'

// Schema de verifiacion de existencia

const checksRequired = [
  { key: 'header', msg: 'La cabecera es requerida' },
  { key: 'message', msg: 'El mensaje es requerido' },
  { key: 'type', msg: 'El tipo de post es requerido' },
];

export const RequiredSchema = checksRequired.map(
  ({ key, msg }) => check(key).exists().withMessage(msg)
);

// Schema del curso

export const Schema = [
  check('header')
    .if(body('header').notEmpty())
    .isLength({ min: 5 }).withMessage('La cabecera es muy corta')
    .isLength({ max: 100 }).withMessage('La cabecera es excede el maximo de caracteres'),
  check('message')
    .if(body('message').notEmpty())
    .isLength({ min: 5 }).withMessage('El mensaje es muy corto')
    .isLength({ max: 100 }).withMessage('El mensaje es excede el maximo de caracteres'),
]