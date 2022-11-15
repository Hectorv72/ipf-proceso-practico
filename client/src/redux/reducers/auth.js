import { authTypes } from '../actions/auth'
const {
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_CLEAR,
  LOAD_USER
} = authTypes

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
}

export default (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case AUTH_SUCCESS:
      localStorage.setItem('token', payload.token)
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      }
    case AUTH_FAIL:
    case AUTH_CLEAR:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      }
    case LOAD_USER:
      return {
        isAuthenticated: true,
        loading: false,
        user: payload
      }
    default:
      return state
  }
}