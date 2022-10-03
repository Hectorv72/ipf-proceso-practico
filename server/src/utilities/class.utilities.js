import Class from "../models/class.model.js";

export const getClasses = async (filters) => {
  const find_filters = {}
  if (filters) {
    const { career, capacity } = filters

    career && (find_filters.career = { '$regex': career })
    capacity && (find_filters.capacity = capacity)
  }

  const classes = await Class.find(find_filters).populate('students._id')
  const prob = { ...classes }.map(
    _class => {
      _class.students = _class.students.map(
        student => { return student._id }
      );
      return _class
    }
  )
  return prob
}

export const getClassById = async (id) => {
  return await Class.findById(id);
}

export const createNewClass = async (data) => {
  const { career, date, capacity, students } = data;

  const _class = new Class({ career, date, capacity, students });
  await _class.save();
  return _class;
}

export const updateOneClass = async (data) => {
  const { career, date, capacity, students, id } = data;
  const update = {};

  career && (update.career = career);
  date && (update.date = date);
  capacity && (update.capacity = capacity);
  students && (update.students = students);

  // Verifica que exista alguna modificación para realizar
  if (Object.entries(update).length > 0) {
    return await Class.findByIdAndUpdate(id, update, { new: true });
  } else {
    return null;
  }
}

export const removeOneClass = async (id) => {
  return await Class.findByIdAndDelete(id);
}