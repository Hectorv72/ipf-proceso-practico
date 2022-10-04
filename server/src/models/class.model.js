import { Schema, model } from "mongoose";

const ClassSchema = new Schema({
  career: {
    type: Schema.Types.String,
    required: true
  },
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
    ref: 'User'
  }]
})

export default model('Class', ClassSchema);