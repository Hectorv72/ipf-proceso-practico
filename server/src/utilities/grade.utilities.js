import Grade from "../models/grade.model.js";

export const getGrades = async (filters) => {
  const find_filters = {}
  if (filters) {
    const { date, student, subject, type } = filters

    date && (find_filters.date = date)
    student && (find_filters.student = student)
    subject && (find_filters.subject = subject)
    type && (find_filters.type = type)
  }

  return await Grade.find(find_filters)
    .populate({
      path: 'student',
      select: '_id username email active personal_info'
    })
    .populate({
      path: 'subject',
      select: '_id name teachers',
      populate: [{
        path: 'teachers',
        select: '_id username email active personal_info'
      }]
    })
}

export const getGradeById = async (id) => {
  return await Grade.findById(id)
    .populate({
      path: 'student',
      select: '_id username email active personal_info'
    })
    .populate({
      path: 'subject',
      select: '_id name teachers',
      populate: [{
        path: 'teachers',
        select: '_id username email active personal_info'
      }]
    })
}

export const createNewGrade = async (data) => {
  const { date, student, subject, description, rate, type } = data;

  const grade = new Grade({ date, student, subject, description, rate, type });
  await grade.save();
  return grade;
}

export const updateOneGrade = async (data) => {
  const { date, student, subject, description, rate, type } = data;
  const update = {};

  date && (update.date = date);
  student && (update.student = student);
  subject && (update.subject = subject);
  description && (update.description = description);
  rate && (update.rate = rate);
  type && (update.type = type);

  // Verifica que exista alguna modificación para realizar
  if (Object.entries(update).length > 0) {
    return await Grade.findByIdAndUpdate(id, update, { new: true });
  } else {
    return null;
  }
}

export const removeOneGrade = async (id) => {
  return await Grade.findByIdAndDelete(id);
}