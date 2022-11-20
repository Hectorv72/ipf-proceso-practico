import axios from 'axios'

// API ROUTES
const config = { headers: { 'Content-Type': 'application/json' } }
const server = import.meta.env.VITE_SERVER_URL
const api = {
  post: `${server}/post`,
}

// TYPES
export const authTypes = {
  GET_POSTS: 'GET_POSTS',
  GET_POST: 'GET_POST',
  CREATE_POST: 'CREATE_POST',
  UPDATE_POST: 'UPDATE_POST',
  DELETE_POST: 'DELETE_POST',
  DELETE_POST: 'DELETE_POST',
  POSTS_ERROR: 'POSTS_ERROR',
  POST_ERROR: 'POST_ERROR',
  CLEAR_POST: 'CLEAR_POST'
}

// ACTIONS
const actions = {}

actions.getPosts = () => async dispatch => {
  const { GET_POSTS, POSTS_ERROR } = authTypes
  try {
    const response = await axios.get(api.post)
    dispatch({
      type: GET_POSTS,
      payload: response.data.posts
    })
  } catch (error) {
    console.log('Error en el dispatch getPosts =>', error)
    dispatch({ type: POSTS_ERROR })
  }
}

// actions.getPost = () => async dispatch => {
//   const { GET_POST, POSTS_ERROR } = authTypes
//   try {
//     const response = await axios.get()
//   } catch (error) {

//   }
// }

actions.addPost = form => async dispatch => {
  const { CREATE_POST } = authTypes
  try {
    const response = await axios.post(api.post, form, config)
    dispatch({
      type: CREATE_POST,
      payload: response.data
    })
  } catch (error) {

  }
}

export default actions