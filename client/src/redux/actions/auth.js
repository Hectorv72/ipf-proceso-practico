import axios from 'axios'

const server = 'localhost:4000'

const api = {
  register: `${server}/auth/register`,
  login: `${server}/auth/login`,
}

const config = {
  headers: {
    'Content-Type': 'application/json'
  }
}

export const authTypes = {
  REGISTER_FAIL: 'REGISTER_FAIL',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  USER_LOADED: 'USER_LOADED',
  AUTH_ERROR: 'AUTH_ERROR',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAIL: 'LOGIN_FAIL',
  LOGOUT: 'LOGOUT',
  CLEAR_PROFILE: 'CLEAR_PROFILE'
}

export const register = ({ username, email, password }) => async dispatch => {
  const { REGISTER_SUCCESS } = authTypes
  const body = JSON.stringify({ username, email, password })
  console.info('register: body =>', body)

  try {
    const response = await axios.post(api.register, body, config)

    dispatch({
      type: REGISTER_SUCCESS,
      payload: response.data
    })

    dispatch(loadUser())

  } catch (error) {
    const errors = error.response.data.errors

    // if (errors) {
    //   errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    // }

    dispatch({
      type: REGISTER_FAIL
    })
  }
}

export const loadUser = () => async dispatch => {
  // localStorage.token && setAuthToken(localStorage.token)

  try {
    const response = await axios.get()
  } catch (error) {

  }
} 