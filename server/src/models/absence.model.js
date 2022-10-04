import { Schema, model } from "mongoose";

const AbsenceSchema = new Schema({
  date: {
    type: Schema.Types.Date,
    required: true
  },
  subject: {
    type: Schema.Types.ObjectId,
    ref: 'Subject',
    required: true
  },
  students: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }],
})

export default model('Absence', AbsenceSchema);