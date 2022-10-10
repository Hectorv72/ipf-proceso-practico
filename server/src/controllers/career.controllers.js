import { createNewCareer, getCareers, removeOneCareer, updateOneCareer } from "../utilities/career.utilities.js";
import { catchHandler } from "../utilities/general.utilities.js";

export const findCareers = async (req, res) => {
  try {
    const careers = await getCareers(req.query);
    return res.status(200).json({ message: 'Busqueda de carreras realizada correctamente', careers });
  } catch (error) {
    const { status, message } = catchHandler(error, 'buscar carreras');
    return res.status(status).json({ message });
  }
}

export const createCareer = async (req, res) => {
  try {
    const career = await createNewCareer(req.body);
    return res.status(201).json({ message: 'Carrera creada correctamente', career });
  } catch (error) {
    const { status, message } = catchHandler(error, 'crear carrera');
    return res.status(status).json({ message });
  }
}

export const updateCareer = async (req, res) => {
  try {
    const career = await updateOneCareer(req.body);
    if (career) {
      return res.status(200).json({ message: 'Carrera actualizada correctamente', career });
    } else {
      return res.status(400).json({ message: 'No se realizó ninguna modificación' })
    }
  } catch (error) {
    const { status, message } = catchHandler(error, 'modificar carrera');
    return res.status(status).json({ message });
  }
}

export const deleteCareer = async (req, res) => {
  try {
    const { id } = req.body;
    const career = await removeOneCareer(id);
    if (career) {
      return res.status(200).json({ message: 'La carrera se eliminó correctamente', career });
    } else {
      return res.status(400).json({ message: 'La carrera no existe' })
    }
  } catch (error) {
    const { status, message } = catchHandler(error, 'eliminar carrera');
    return res.status(status).json({ message });
  }
}