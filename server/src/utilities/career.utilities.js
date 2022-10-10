import Career from "../models/career.model.js";

export const getCareers = async (filters) => {
  const find_filters = {}
  if (filters) {
    const { name, date, duration } = filters

    name && (find_filters.name = { '$regex': name })
    date && (find_filters.date = date)
    duration && (find_filters.duration = duration)
  }

  return await Career.find(find_filters)
    .populate({
      path: 'classrooms.students',
      select: '_id username email active personal_info'
    })
    .populate({
      path: 'calendar.schedules.subjects'
    })
}

export const getCareerById = async (id) => {
  return await Career.findById(id)
    .populate({
      path: 'classrooms.students',
      select: '_id username email active personal_info'
    })
    .populate({
      path: 'calendar.schedules.subjects'
    })
}

export const createNewCareer = async (data) => {
  const { name, date, duration, classrooms, calendar } = data;

  const career = new Career({ name, date, duration, classrooms, calendar });
  await career.save();
  return career;
}

export const updateOneCareer = async (data) => {
  const { name, date, duration, classrooms, calendar, id } = data;
  const update = {};

  classrooms && (update.classrooms = classrooms);
  calendar && (update.calendar = calendar);
  duration && (update.duration = duration);
  name && (update.name = name);
  date && (update.date = date);

  // Verifica que exista alguna modificación para realizar
  if (Object.entries(update).length > 0) {
    return await Career.findByIdAndUpdate(id, update, { new: true });
  } else {
    return null;
  }
}

export const removeOneCareer = async (id) => {
  return await Career.findByIdAndDelete(id);
}