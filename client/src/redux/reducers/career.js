import { authTypes } from '../actions/career'
const {
  GET_CAREERS,
  GET_CAREER,
  CLEAR_CAREER,
  CREATE_CAREER,
  UPDATE_CAREER,
  DELETE_CAREER,
  CAREERS_ERROR,
  CAREER_ERROR
} = authTypes

const initialState = {
  careers: [],
  career: null,
  subject: null,
  loading: true,
  error: {}
}

export default (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_CAREERS:
      return {
        ...state,
        careers: payload,
        loading: false
      }
    case GET_CAREER:
      return {
        ...state,
        career: payload,
        loading: false
      }
    default:
      return state
  }
}
