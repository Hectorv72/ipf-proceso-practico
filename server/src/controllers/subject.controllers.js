import { createNewSubject, getSubjects, removeOneSubject, updateOneSubject } from "../utilities/subject.utilities.js";
import { catchHandler } from "../utilities/general.utilities.js";

export const findSubjects = async (req, res) => {
  try {
    const subjects = await getSubjects(req.query);
    return res.status(200).json({ message: 'Busqueda de materias realizada correctamente', subjects });
  } catch (error) {
    const { status, message } = catchHandler(error, 'buscar materias');
    return res.status(status).json({ message });
  }
}

export const createSubject = async (req, res) => {
  try {
    const subject = await createNewSubject(req.body);
    return res.status(201).json({ message: 'Materia creada correctamente', subject });
  } catch (error) {
    const { status, message } = catchHandler(error, 'crear materia');
    return res.status(status).json({ message });
  }
}

export const updateSubject = async (req, res) => {
  try {
    const subject = await updateOneSubject(req.body);
    if (subject) {
      return res.status(200).json({ message: 'Materia actualizada correctamente', subject });
    } else {
      return res.status(400).json({ message: 'No se realizó ninguna modificación' })
    }
  } catch (error) {
    const { status, message } = catchHandler(error, 'modificar materia');
    return res.status(status).json({ message });
  }
}

export const deleteSubject = async (req, res) => {
  try {
    const { id } = req.body;
    const subject = await removeOneSubject(id);
    if (subject) {
      return res.status(200).json({ message: 'La materia se eliminó correctamente', subject });
    } else {
      return res.status(400).json({ message: 'La materia no existe' })
    }
  } catch (error) {
    const { status, message } = catchHandler(error, 'eliminar materia');
    return res.status(status).json({ message });
  }
}

// export const clearAllSubjects = async (req, res) => {
//   try {
//     await Subject
//   } catch (error) {
    
//   }
// }