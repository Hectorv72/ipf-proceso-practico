import User from '../models/user.model'

export const getUsers = async (find) => {
  return await User.find(find)
}

export const getUserById = async (id) => {

}