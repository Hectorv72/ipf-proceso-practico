// TYPES
export const authTypes = {
  SET_PAGE: 'SET_PAGE',
  SET_TITLE: 'SET_TITLE',
  RESET_TITLE: 'RESET_TITLE',
  OPEN_SIDEBAR: 'OPEN_SIDEBAR',
  CLOSE_SIDEBAR: 'CLOSE_SIDEBAR'
}

// ACTIONS
const actions = {}

actions.openSideBar = () => async dispatch => {
  const { OPEN_SIDEBAR } = authTypes
  dispatch({ type: OPEN_SIDEBAR })
}

actions.closeSideBar = () => async dispatch => {
  const { CLOSE_SIDEBAR } = authTypes
  dispatch({ type: CLOSE_SIDEBAR })
}

actions.setAppPage = page => async dispatch => {
  const { SET_PAGE } = authTypes
  dispatch({
    type: SET_PAGE,
    payload: page
  })
}

actions.setAppTitle = title => async dispatch => {
  const { SET_TITLE } = authTypes
  dispatch({
    type: SET_TITLE,
    payload: title
  })
}

actions.resetAppTitle = () => async dispatch => {
  const { RESET_TITLE } = authTypes
  dispatch({ type: RESET_TITLE })
}

export default actions
