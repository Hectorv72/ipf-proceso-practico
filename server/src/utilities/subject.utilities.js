import subjectCollection from "../collections/subject.collection.js";
import Subject from "../models/subject.model.js";
import { randomItem, randomNumber } from "./general.utilities.js";
import { getRandomUsers } from "./user.utilities.js";

export const getSubjects = async (filters) => {
  const find_filters = {}
  if (filters) {
    const { name } = filters
    name && (find_filters.name = { '$regex': name })
  }

  return await Subject.find(find_filters)
    .populate({
      path: 'tasks.assigned_students.student',
      select: '_id username email active personal_info'
    })
    .populate({
      path: 'teachers.teacher',
      select: 'id username email active personal_info'
    })
}

export const getSubjectById = async (id) => {
  return await Subject.findById(id)
    .populate({
      path: 'tasks.assigned_students.student',
      select: '_id username email active personal_info'
    })
    .populate({
      path: 'teachers.teacher',
      select: 'id username email active personal_info'
    })
}

export const getRandomSubjects = async (size) => {
  return await Subject.aggregate([{ $sample: { size } }])
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

export const clearSubjects = async () => {
  return await Subject.deleteMany();
}

export const generateRandomSubject = async () => {
  const name = randomItem(subjectCollection);

  // obtiene a los usuarios que seran los maestros
  const teachers = (await getRandomUsers(randomNumber(2, 3))).map(
    teacher => ({ teacher: teacher._id, type: 'ayudante' })
  )

  // asigna a un usuario como jefe de catedra
  teachers[(randomNumber(0, teachers.length))].type = 'jefe';

  return ({
    name,
    teachers
  })
}

export const generateRandomSubjects = async (count) => {
  const listSubjects = []

  for (let loop = 0; loop < count; loop++) {
    const random = await generateRandomSubject();
    const subject = await createNewSubject(random);
    listSubjects.push(subject);
  }
  return listSubjects
}