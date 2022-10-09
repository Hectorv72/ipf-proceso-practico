import { Schema, model } from "mongoose";

export const gradeTypes = ['practico', 'parcial', 'final'];

const ClassroomSchema = new Schema({
  date: {
    type: Schema.Types.Date,
    required: true
  },
  student: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  subject: {
    type: Schema.Types.ObjectId,
    ref: 'Subject',
    required: true
  },
  description: {
    type: Schema.Types.String,
    required: true
  },
  rate: {
    type: Schema.Types.Number,
    required: true
  },
  type: {
    type: Schema.Types.String,
    enum: ['practico', 'parcial', 'final'],
    required: true
  }
})

export default model('Grade', ClassroomSchema);