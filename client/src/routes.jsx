import { createBrowserRouter } from "react-router-dom";
import Root from "./layouts/Root";
import Login from "./pages/Login";
import Main from "./pages/Main";

export default createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Main />
      },
      {
        path: 'login',
        element: <Login />
      }
    ]
  },
  {
    path: '/sigin',
    element: <Login />
  }
])