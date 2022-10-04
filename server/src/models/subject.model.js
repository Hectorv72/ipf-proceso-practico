import { Schema, model } from "mongoose";

const SubjectSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true
  },
  classroom: {
    type: Schema.Types.ObjectId,
    ref: 'Class',
    required: true
  },
  teachers: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }],
  term: {
    type: Schema.Types.String,
    required: true
  },
  duration: {
    type: Schema.Types.Number,
    required: true
  },
  schedules: [{
    day: {
      type: Schema.Types.String,
      required: true
    },
    timetable: {
      start: {
        type: Schema.Types.String,
        required: true
      },
      end: {
        type: Schema.Types.String,
        required: true
      }
    }
  }]
})

export default model('Subject', SubjectSchema);