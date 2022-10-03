import { body, check } from 'express-validator'
import { UserTypes } from '../models/user.model.js'
import { findUserByEmail, findUserByUsername } from '../utilities/userschema.utilities.js'

// Schema de verifiacion de existencia

const checksRequired = [
  { key: 'username', msg: 'El nombre de usuario es requerido' },
  { key: 'password', msg: 'La contraseña es requerida' },
  { key: 'email', msg: 'El email es requerido' },
  { key: 'personal_info.names', msg: 'El nombre de la persona es requerido' },
  { key: 'personal_info.surnames', msg: 'El apellido de la persona es requerido' },
  { key: 'personal_info.date_birth', msg: 'La fecha de nacimiento es requerida' },
  { key: 'personal_info.dni', msg: 'El DNI es requerido' },
];

export const RequiredSchema = checksRequired.map(
  ({ key, msg }) => check(key).exists().withMessage(msg)
);

// Schema del usuario

const personal_info = [
  check('personal_info.names')
    .if(body('type').notEmpty())
    .trim()
    .isLength({ min: 5, max: 50 }).withMessage('El nombre es muy corto')
    .matches(/^[A-Za-z\s]+$/g).withMessage('Solo puede ingresar carácteres simples'),
  check('personal_info.surnames')
    .if(body('type').notEmpty())
    .trim()
    .isLength({ min: 5, max: 50 }).withMessage('El apellido es muy corto')
    .matches(/^[A-Za-z\s]+$/g).withMessage('Solo puede ingresar carácteres simples'),
  check('personal_info.dni')
    .if(body('type').notEmpty())
    .isNumeric({ no_symbols: true }).withMessage('Solo puede ingresar números')
]

export const Schema = [
  check('username')
    .if(body('username').notEmpty())
    .custom(findUserByUsername)
    .isLength({ min: 5, max: 50 }).withMessage('El nombre de usuario es muy corto'),
  check('password')
    .if(body('password').notEmpty())
    .isString().withMessage('La contraseña debe contener caracteres'),
  check('email')
    .if(body('email').notEmpty())
    .custom(findUserByEmail)
    .isEmail().withMessage('EL correo ingresado no es valido'),
  check('type')
    .if(body('type').notEmpty())
    .isIn(UserTypes).withMessage('El tipo de usuario no existe'),
  ...personal_info
]