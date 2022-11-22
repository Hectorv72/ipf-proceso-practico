// TYPES
export const authTypes = {
  SET_PAGE: 'SET_PAGE',
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

export default actions
