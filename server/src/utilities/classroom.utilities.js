import Classroom from "../models/classroom.model.js";

export const getClassrooms = async (filters) => {
  const find_filters = {}
  if (filters) {
    const { career, capacity } = filters

    career && (find_filters.career = { '$regex': career })
    capacity && (find_filters.capacity = capacity)
  }

  return await Classroom.find(find_filters).populate({
    path: 'students',
    select: '_id username email active personal_info'
  })
}

export const getClassroomById = async (id) => {
  return await Classroom.findById(id).populate({
    path: 'students',
    select: '_id username email active personal_info'
  });
}

export const createNewClassroom = async (data) => {
  const { career, date, capacity, students } = data;

  const _class = new Classroom({ career, date, capacity, students });
  await _class.save();
  return _class;
}

export const updateOneClassroom = async (data) => {
  const { career, date, capacity, students, id } = data;
  const update = {};

  career && (update.career = career);
  date && (update.date = date);
  capacity && (update.capacity = capacity);
  students && (update.students = students);

  // Verifica que exista alguna modificación para realizar
  if (Object.entries(update).length > 0) {
    return await Classroom.findByIdAndUpdate(id, update, { new: true });
  } else {
    return null;
  }
}

export const removeOneClassroom = async (id) => {
  return await Classroom.findByIdAndDelete(id);
}