import Absence from '../models/absence.model.js'

export const getAbsences = async (filters) => {
  const find_filters = {};
  if (filters) {
    const { date, subject, students } = filters;
    career && (find_filters.subject = subject)
  }
  return await Absence.find(find_filters)
    .populate('subject')
    .populate('students');
}

export const getAbsenceById = async (id) => {
  return await Absence.findById(id)
    .populate('subject')
    .populate('students');
}

export const createNewAbsence = async (data) => {
  const { date, subject, students } = data;

  const absence = new Absence({ date, subject, students });
  await absence.save();
  return absence;
}

export const updateOneAbsence = async (data) => {
  const { date, subject, students, id } = data;
  const update = {};

  date && (update.date = date);
  subject && (update.subject = subject);
  students && (update.students = students);

  // Verifica que exista alguna modificación para realizar
  if (Object.entries(update).length > 0) {
    return await Absence.findByIdAndUpdate(id, update, { new: true });
  } else {
    return null;
  }
}

export const deactivateOneAbsence = async (id) => {
  return await Absence.findByIdAndUpdate(id, { active: false }, { new: true });
}

export const removeOneAbsence = async (id) => {
  return await Absence.findByIdAndDelete(id);
}