import { authTypes } from '../actions/app'
const {
  SET_PAGE,
  SET_TITLE,
  RESET_TITLE,
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR
} = authTypes

const initialState = {
  sidebar: false,
  page: null,
  title: "Classroomn't"
}

export default (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case OPEN_SIDEBAR:
      return {
        ...state,
        sidebar: true
      }
    case CLOSE_SIDEBAR:
      return {
        ...state,
        sidebar: false
      }
    case SET_PAGE:
      return {
        ...state,
        page: payload
      }
    case SET_TITLE:
      return {
        ...state,
        title: payload
      }
    case RESET_TITLE:
      return {
        ...state,
        title: initialState.title
      }
    default:
      return state
  }
}
