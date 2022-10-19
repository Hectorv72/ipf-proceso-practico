import { Schema, model } from "mongoose";

export const gradeTypes = ['practico', 'parcial', 'final'];

const ClassroomSchema = new Schema({
  header: {
    type: Schema.Types.String,
    required: true
  },
  message: {
    type: Schema.Types.String,
    required: true
  },
  type: {
    type: Schema.Types.String,
    required: true
  },
  career: {
    type: Schema.Types.ObjectId,
    ref: 'Career',
    default: undefined
  },
  sender: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true,
  versionKey: false,
})

export default model('Post', ClassroomSchema);