import axios from 'axios'
import setAuthToken from '../../helpers/setAuthToken'

const server = import.meta.env.VITE_SERVER_URL

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
  AUTH_SUCCESS: 'AUTH_SUCCESS',
  AUTH_FAIL: 'AUTH_FAIL',
  AUTH_CLEAR: 'AUTH_CLEAR',
  LOAD_USER: 'LOAD_USER'
}

export const authUser = () => async dispatch => {
  const { AUTH_SUCCESS, AUTH_FAIL } = authTypes
  localStorage.token && setAuthToken(localStorage.token)

  try {
    const response = await axios.get()
    dispatch({
      type: AUTH_SUCCESS,
      payload: response.data
    })
  } catch (error) {
    dispatch({
      type: AUTH_FAIL
    })
  }
}

export const register = ({ email, password }) => async dispatch => {
  const { AUTH_SUCCESS, AUTH_FAIL } = authTypes
  const body = JSON.stringify({ email, password })
  console.info('register: body =>', body)

  try {
    const response = await axios.post(api.register, body, config)
    dispatch({
      type: AUTH_SUCCESS,
      payload: response.data
    })
    // dispatch(loadUser())
  } catch (error) {
    // const errors = error.response.data.errors

    // if (errors) {
    //   errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    // }

    dispatch({
      type: AUTH_FAIL
    })
  }
}

export const login = () => async dispatch => {
  const { AUTH_SUCCESS, AUTH_FAIL } = authTypes
  const body = JSON.stringify({ email, password })
  try {
    const response = await axios.post(api.login, body, config)
    dispatch({
      type: AUTH_SUCCESS,
      payload: response.data
    })
    // dispatch(loadUser())
  } catch (error) {
    // const errors = err.response.data.errors
    dispatch({
      type: AUTH_FAIL
    })
  }
}

export const logout = () => dispatch => {
  const { AUTH_CLEAR } = authTypes
  dispatch({ type: AUTH_CLEAR })
}