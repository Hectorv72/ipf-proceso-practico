import { faker } from "@faker-js/faker";
import careerCollection from "../collections/career.collection.js";
import Career from "../models/career.model.js";
import { randomItem, randomNumber } from "./general.utilities.js";
import { getRandomSubjects } from "./subject.utilities.js";
import { getRandomUsers } from "./user.utilities.js";

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
      path: 'calendar.schedules.subjects',
      select: 'name teachers tasks',
      populate: [{
        path: 'teachers.teacher',
        select: '_id username email active personal_info'
      }]
    })
}

export const getCareerById = async (id) => {
  return await Career.findById(id)
    .populate({
      path: 'classrooms.students',
      select: '_id username email active personal_info'
    })
    .populate({
      path: 'calendar.schedules.subjects',
      select: 'name teachers tasks',
      populate: [{
        path: 'teachers.teacher',
        select: '_id username email active personal_info'
      }]
    })
}

export const getRandomCareers = async (size) => {
  return await Career.aggregate([{ $sample: { size } }])
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

export const clearCareers = async () => {
  return await Career.deleteMany();
}

export const generateRandomCareer = async () => {

  const name = randomItem(careerCollection);
  const years = randomNumber(1, 5);
  const duration = years * 8760;

  const capacity = randomNumber(2, 6) * 10;
  const date = faker.date.between('2018-01-01T00:00:00.000Z', '2023-01-01T00:00:00.000Z')
  const students = (await getRandomUsers(capacity)).map(student => student._id)

  const classrooms = [{
    date,
    capacity,
    students
  }]

  const calendar = [];

  for (let year = 1; year <= years; year++) {
    const schedules = [];

    // carga las materias para el año
    for (let term of ['1er cuatrimestre', '2do cuatrimestre']) {
      const subjects = (await getRandomSubjects(3)).map(subject => subject._id);
      schedules.push({
        term,
        subjects
      })
    }

    calendar.push({
      year,
      schedules
    })
  }

  const career_date = faker.date.between('2018-01-01T00:00:00.000Z', '2023-01-01T00:00:00.000Z')


  return ({
    name,
    date: career_date,
    duration,
    classrooms,
    calendar
  })
}

export const generateRandomCareers = async (count) => {
  const listCareers = []

  for (let loop = 0; loop < count; loop++) {
    const random = await generateRandomCareer();
    const career = await createNewCareer(random);
    listCareers.push(career);
  }
  return listCareers
}