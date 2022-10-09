import { createNewGrade, getGrades, removeOneGrade, updateOneGrade } from "../utilities/grade.utilities.js";
import { catchHandler } from "../utilities/general.utilities.js";

export const findGrades = async (req, res) => {
  try {
    const grades = await getGrades(req.query);
    return res.status(200).json({ message: 'Busqueda de calificaciones realizada correctamente', grades });
  } catch (error) {
    const { status, message } = catchHandler(error, 'buscar calificaciones');
    return res.status(status).json({ message });
  }
}

export const createGrade = async (req, res) => {
  try {
    const grade = await createNewGrade(req.body);
    return res.status(201).json({ message: 'Calificación creada correctamente', grade });
  } catch (error) {
    const { status, message } = catchHandler(error, 'crear calificación');
    return res.status(status).json({ message });
  }
}

export const updateGrade = async (req, res) => {
  try {
    const grade = await updateOneGrade(req.body);
    if (grade) {
      return res.status(200).json({ message: 'Calificación actualizada correctamente', grade });
    } else {
      return res.status(400).json({ message: 'No se realizó ninguna modificación' })
    }
  } catch (error) {
    const { status, message } = catchHandler(error, 'modificar calificación');
    return res.status(status).json({ message });
  }
}

export const deleteGrade = async (req, res) => {
  try {
    const { id } = req.body;
    const grade = await removeOneGrade(id);
    if (grade) {
      return res.status(200).json({ message: 'La calificación se eliminó correctamente', grade });
    } else {
      return res.status(400).json({ message: 'La calificación no existe' })
    }
  } catch (error) {
    const { status, message } = catchHandler(error, 'eliminar calificación');
    return res.status(status).json({ message });
  }
}