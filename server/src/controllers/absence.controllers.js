import { createNewAbsence, getAbsences, removeOneAbsence, updateOneAbsence } from "../utilities/absence.utilities.js";
import { catchHandler } from "../utilities/general.utilities.js";

export const findAbsences = async (req, res) => {
  try {
    const absences = await getAbsences(req.query);
    return res.status(200).json({ message: 'Busqueda de inasistencias realizada correctamente', absences });
  } catch (error) {
    const { status, message } = catchHandler(error, 'buscar inasistencias');
    return res.status(status).json({ message });
  }
}

export const createAbsence = async (req, res) => {
  try {
    const absence = await createNewAbsence(req.body);
    return res.status(201).json({ message: 'Inasistencia creada correctamente', absence });
  } catch (error) {
    const { status, message } = catchHandler(error, 'crear inasistencia');
    return res.status(status).json({ message });
  }
}

export const updateAbsence = async (req, res) => {
  try {
    const absence = await updateOneAbsence(req.body);
    if (absence) {
      return res.status(200).json({ message: 'Inasistencia actualizada correctamente', absence });
    } else {
      return res.status(400).json({ message: 'No se realizó ninguna modificación' })
    }
  } catch (error) {
    const { status, message } = catchHandler(error, 'modificar inasistencia');
    return res.status(status).json({ message });
  }
}

export const deleteAbsence = async (req, res) => {
  try {
    const { id } = req.body;
    const absence = await removeOneAbsence(id);
    if (absence) {
      return res.status(200).json({ message: 'La inasistencia se eliminó correctamente', absence });
    } else {
      return res.status(400).json({ message: 'La inasistencia no existe' })
    }
  } catch (error) {
    const { status, message } = catchHandler(error, 'eliminar inasistencia');
    return res.status(status).json({ message });
  }
}