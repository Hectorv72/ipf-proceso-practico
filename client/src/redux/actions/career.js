import axios from 'axios'

// API ROUTES
const config = { headers: { 'Content-Type': 'application/json' } }
const server = import.meta.env.VITE_SERVER_URL
const api = {
  career: `${server}/career`,
}

// TYPES
export const authTypes = {
  GET_CAREERS: 'GET_CAREERS',
  GET_CAREER: 'GET_CAREER',
  CREATE_CAREER: 'CREATE_CAREER',
  UPDATE_CAREER: 'UPDATE_CAREER',
  DELETE_CAREER: 'DELETE_CAREER',
  DELETE_CAREER: 'DELETE_CAREER',
  CAREERS_ERROR: 'CAREERS_ERROR',
  CAREER_ERROR: 'CAREER_ERROR',
  CLEAR_CAREER: 'CLEAR_CAREER'
}

// ACTIONS
const actions = {}

actions.getCareers = userId => async dispatch => {
  const { GET_CAREERS, CAREERS_ERROR } = authTypes
  try {
    const query = userId ? `?user=${userId}` : ''
    const response = await axios.get(api.career + query)
    dispatch({
      type: GET_CAREERS,
      payload: response.data.careers
    })
  } catch (error) {
    console.log('Error en el dispatch getCareers =>', error)
    dispatch({ type: CAREERS_ERROR })
  }
}

actions.getCareer = careerId => async dispatch => {
  const { GET_CAREER, CAREER_ERROR } = authTypes
  try {
    const response = await axios.get(`${api.career}/${careerId}`)
    dispatch({
      type: GET_CAREER,
      payload: response.data.career
    })
  } catch (error) {
    console.log('Error en el dispatch getCareer =>', error)
    dispatch({ type: CAREER_ERROR })
  }
}

export default actions
