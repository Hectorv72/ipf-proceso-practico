import { authTypes } from '../actions/app'
const {
  SET_PAGE,
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR
} = authTypes

const initialState = {
  sidebar: false,
  page: null
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
    default:
      return state
  }
}
