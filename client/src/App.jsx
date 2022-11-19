import React from 'react'
import { RouterProvider } from "react-router-dom"
import { Provider } from 'react-redux'
import store from './redux/store'
import routes from './routes'
import AuthUser from './components/AuthUser'

function App() {
  return (
    <Provider store={store}>
      <AuthUser />
      <RouterProvider router={routes} />
    </Provider>
  )
}

export default App
