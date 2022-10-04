import { createNewClassroom, getClassrooms, removeOneClassroom, updateOneClassroom } from "../utilities/classroom.utilities.js";
import { catchHandler } from "../utilities/general.utilities.js";

export const findClassrooms = async (req, res) => {
  try {
    const classrooms = await getClassrooms(req.query);
    return res.status(200).json({ message: 'Busqueda de cursos realizada correctamente', classrooms });
  } catch (error) {
    const { status, message } = catchHandler(error, 'buscar cursos');
    return res.status(status).json({ message });
  }
}

export const createClassroom = async (req, res) => {
  try {
    const classroom = await createNewClassroom(req.body);
    return res.status(201).json({ message: 'Curso creado correctamente', class: classroom });
  } catch (error) {
    const { status, message } = catchHandler(error, 'crear curso');
    return res.status(status).json({ message });
  }
}

export const updateClassroom = async (req, res) => {
  try {
    const classroom = await updateOneClassroom(req.body);
    if (classroom) {
      return res.status(200).json({ message: 'Curso actualizado correctamente', class: classroom });
    } else {
      return res.status(400).json({ message: 'No se realizó ninguna modificación' })
    }
  } catch (error) {
    const { status, message } = catchHandler(error, 'modificar curso');
    return res.status(status).json({ message });
  }
}

export const deleteClassroom = async (req, res) => {
  try {
    const { id } = req.body;
    const classroom = await removeOneClassroom(id);
    if (classroom) {
      return res.status(200).json({ message: 'El curso se eliminó correctamente', classroom });
    } else {
      return res.status(400).json({ message: 'El curso no existe' })
    }
  } catch (error) {
    const { status, message } = catchHandler(error, 'eliminar curso');
    return res.status(status).json({ message });
  }
}