import Subject from "../models/subject.model.js";

export const getSubjects = async (filters) => {
  const find_filters = {}
  if (filters) {
    const { name, classroom, teacher, student, term, duration } = filters

    name && (find_filters.name = { '$regex': name })
    classroom && (find_filters.classroom = classroom)
    term && (find_filters.term = term)
    duration && (find_filters.duration = duration)
    // teacher && (find_filters.teachers = {
    //   '$elemMatch': { 'personal_info.names': { '$regex': teacher } },
    // })
    // student && (find_filters.student = {
    //   '$all': [
    //     { '$elemMatch': { 'students.personal_info.names': { '$regex': student } } },
    //     { '$elemMatch': { 'students.personal_info.surnames': { '$regex': student } } },
    //   ]
    // })
  }

  return await Subject.find(find_filters)
    .populate({
      path: 'classroom',
      populate: [{
        path: 'students',
        select: '_id username email active personal_info'
      }]
    })
    .populate({
      path: 'teachers',
      select: 'id username email active personal_info'
    })
}

export const getSubjectById = async (id) => {
  return await Subject.findById(id)
    .populate({
      path: 'classroom',
      populate: [{
        path: 'students',
        select: '_id username email active personal_info'
      }]
    })
    .populate({
      path: 'teachers',
      select: 'id username email active personal_info'
    })
}

export const createNewSubject = async (data) => {
  const { name, classroom, teachers, term, duration, schedules } = data;

  const subject = new Subject({ name, classroom, teachers, term, duration, schedules });
  await subject.save();
  return subject;
}

export const updateOneSubject = async (data) => {
  const { name, classroom, teachers, term, duration, schedules, id } = data;
  const update = {};

  classroom && (update.classroom = classroom);
  schedules && (update.schedules = schedules);
  teachers && (update.teachers = teachers);
  duration && (update.duration = duration);
  name && (update.name = name);
  term && (update.term = term);

  // Verifica que exista alguna modificación para realizar
  if (Object.entries(update).length > 0) {
    return await Subject.findByIdAndUpdate(id, update, { new: true });
  } else {
    return null;
  }
}

export const removeOneSubject = async (id) => {
  return await Subject.findByIdAndDelete(id);
}