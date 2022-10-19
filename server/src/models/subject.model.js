import { Schema, model } from "mongoose";

const teacherTypes = ['jefe', 'ayudante']

const SubjectSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true
  },
  teachers: [{
    teacher: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    type: {
      type: Schema.Types.String,
      enum: teacherTypes,
      required: true
    }
  }],
  tasks: [{
    lead_time: {
      type: Schema.Types.Date,
      required: true
    },
    date: {
      type: Schema.Types.Date,
      required: true
    },
    description: {
      type: Schema.Types.String,
      required: true
    },
    type: {
      type: Schema.Types.String,
      required: true
    },
    active: {
      type: Schema.Types.Boolean,
      required: true
    },
    assigned_students: [{
      student: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      grade: {
        type: Schema.Types.Number,
        default: 0
      },
      completed: {
        type: Schema.Types.Boolean,
        default: false
      },
      deliveries: [{
        date: {
          type: Schema.Types.Date,
          required: true
        },
        attachments: [{
          url: Schema.Types.String,
          name: Schema.Types.String,
          type: Schema.Types.String
        }]
      }]
    }],
    attachments: [{
      url: Schema.Types.String,
      name: Schema.Types.String,
      type: Schema.Types.String
    }]
  }]
})

export default model('Subject', SubjectSchema);