import { createNewClass, getClasses, removeOneClass, updateOneClass } from "../utilities/class.utilities.js";
import { catchHandler } from "../utilities/general.utilities.js";

export const findClasses = async (req, res) => {
  try {
    const classes = await getClasses(req.query);
    return res.status(200).json({ message: 'Busqueda de cursos realizada correctamente', classes });
  } catch (error) {
    const { status, message } = catchHandler(error, 'buscar cursos');
    return res.status(status).json({ message });
  }
}

export const createClass = async (req, res) => {
  try {
    const _class = await createNewClass(req.body);
    return res.status(201).json({ message: 'Curso creado correctamente', class: _class });
  } catch (error) {
    const { status, message } = catchHandler(error, 'crear curso');
    return res.status(status).json({ message });
  }
}

export const updateClass = async (req, res) => {
  try {
    const _class = await updateOneClass(req.body);
    if (_class) {
      return res.status(200).json({ message: 'Curso actualizado correctamente', class: _class });
    } else {
      return res.status(400).json({ message: 'No se realizó ninguna modificación' })
    }
  } catch (error) {
    const { status, message } = catchHandler(error, 'modificar curso');
    return res.status(status).json({ message });
  }
}

export const deleteClass = async (req, res) => {
  try {
    const { id } = req.body;
    const _class = await removeOneClass(id);
    if (_class) {
      return res.status(200).json({ message: 'El curso se eliminó correctamente', _class });
    } else {
      return res.status(400).json({ message: 'El curso no existe' })
    }
  } catch (error) {
    const { status, message } = catchHandler(error, 'eliminar curso');
    return res.status(status).json({ message });
  }
}