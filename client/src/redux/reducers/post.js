import { authTypes } from '../actions/post'
const {
  GET_POSTS,
  GET_POST,
  CLEAR_POST,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  POSTS_ERROR,
  POST_ERROR
} = authTypes

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {}
}

export default (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case CREATE_POST:
      return {
        ...state,
        posts: [payload, ...state.posts],
      }
    case GET_POSTS:
      return {
        ...state,
        posts: payload.reverse(),
        loading: false
      }
    case GET_POST:
      return {
        ...state,
        post: payload,
        loading: false
      }
    default:
      return state
  }
}
