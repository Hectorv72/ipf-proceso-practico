import { authTypes } from '../actions/career'
const {
  GET_CAREERS,
  GET_CAREER,
  GET_SUBJECT,
  CLEAR_CAREER,
  CLEAR_SUBJECT,
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
    case GET_SUBJECT:
      return {
        ...state,
        subject: payload,
      }
    case CLEAR_CAREER:
      return {
        ...state,
        career: null,
      }
    case CLEAR_SUBJECT:
      return {
        ...state,
        subject: null,
      }
    default:
      return state
  }
}
