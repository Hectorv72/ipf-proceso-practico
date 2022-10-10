import Subject from "../models/subject.model.js";

export const getSubjects = async (filters) => {
  const find_filters = {}
  if (filters) {
    const { name } = filters
    name && (find_filters.name = { '$regex': name })
  }

  return await Subject.find(find_filters)
    .populate({
      path: 'tasks.asigned_students.student',
      select: '_id username email active personal_info'
    })
    .populate({
      path: 'teachers',
      select: 'id username email active personal_info'
    })
}

export const getSubjectById = async (id) => {
  return await Subject.findById(id)
    .populate({
      path: 'tasks.asigned_students.student',
      select: '_id username email active personal_info'
    })
    .populate({
      path: 'teachers',
      select: 'id username email active personal_info'
    })
}

export const createNewSubject = async (data) => {
  const { name, teachers } = data;

  const subject = new Subject({ name, teachers });
  await subject.save();
  return subject;
}

export const updateOneSubject = async (data) => {
  const { name, teachers, tasks } = data;
  const update = {};

  teachers && (update.teachers = teachers);
  tasks && (update.tasks = tasks);
  name && (update.name = name);

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