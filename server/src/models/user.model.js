import { Schema, model } from "mongoose";

export const UserTypes = ['común', 'administrativo'];

const UserSchema = new Schema({
  username: { // Nombre de usuario
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  type: { // Tipo de usuario
    type: String,
    enum: UserTypes,
    default: 'común'
  },
  active: { // Verifica si el usuario fue eliminado de manera lógica
    type: Boolean,
    default: true
  },
  personal_info: {
    names: {
      type: String,
      required: true
    },
    surnames: {
      type: String,
      required: true
    },
    date_birth: {
      type: Date,
      required: true
    },
    dni: {
      type: String,
      required: true
    },
    documentation: [
      {
        url: String,
        file_name: String,
        type: String
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