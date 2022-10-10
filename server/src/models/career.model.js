import { Schema, model } from "mongoose";

const SubjectSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true
  },
  classrooms: [{
    date: {
      type: Schema.Types.Date,
      required: true
    },
    capacity: {
      type: Schema.Types.Number,
      required: true
    },
    students: [{
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }]
  }],
  calendar: [{
    year: {
      type: Schema.Types.Number,
      required: true
    },
    schedules: [{
      term: {
        type: Schema.Types.String,
        required: true
      },
      subjects: [{
        type: Schema.Types.ObjectId,
        ref: 'Subject',
        required: true
      }]
    }]
  }]
})

export default model('Subject', SubjectSchema);