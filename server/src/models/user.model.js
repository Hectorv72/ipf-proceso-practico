import { Schema, model } from "mongoose";

export const UserTypes = ['común', 'administrativo'];

const UserSchema = new Schema({
  username: { // Nombre de usuario
    type: Schema.Types.String,
    required: true
  },
  email: {
    type: Schema.Types.String,
    required: true
  },
  password: {
    type: Schema.Types.String,
    required: true
  },
  type: { // Tipo de usuario
    type: Schema.Types.String,
    enum: UserTypes,
    default: 'común'
  },
  active: { // Verifica si el usuario fue eliminado de manera lógica
    type: Schema.Types.Boolean,
    default: true
  },
  personal_info: {
    names: {
      type: Schema.Types.String,
      required: true
    },
    surnames: {
      type: Schema.Types.String,
      required: true
    },
    date_birth: {
      type: Schema.Types.Date,
      required: true
    },
    dni: {
      type: Schema.Types.String,
      required: true
    },
    documentation: [
      {
        url: Schema.Types.String,
        file_name: Schema.Types.String,
        type: Schema.Types.String
      }
    ]
  }
}, {
  timestamps: true,
  versionKey: false,
})

UserSchema.methods.toJsonResponse = function () {
  const { _id, password, ...user } = this._doc;
  user.id = _id;
  return user;
}

export default model('user', UserSchema);