import { Schema, model } from "mongoose";

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
    enum: ['común', 'administrativo'],
    required: true
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
  versionKey: true,
})

export default User = model('user', UserSchema)