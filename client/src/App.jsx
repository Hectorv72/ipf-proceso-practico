import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { Provider } from 'react-redux'
import store from './redux/store'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <div>prueba</div>
  },
])

function App() {

  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  )
}

export default App
