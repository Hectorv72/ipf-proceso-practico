import { catchHandler } from "../utilities/general.utilities";
import { getUsers } from "../utilities/user.utilities"

export const findUsers = async (req, res) => {
  try {
    const users = await getUsers();
    return res.status(200).json({ message: 'To bien', users });
  } catch (error) {
    const { status, message } = catchHandler(error)
    return res.status(status).json(message)
  }
}

export const findOneUser = () => {

}

export const createUser = () => {

}

export const updateUser = () => {

}

export const deleteUser = () => {

}

export const removeUser = () => {

}