import { createBrowserRouter } from "react-router-dom";
import Root from "./layouts/Root";
import Career from "./pages/Career";
import Careers from "./pages/Careers";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Posts from "./pages/Posts";

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
      },
      {
        path: 'posts',
        element: <Posts />
      },
      {
        path: 'careers',
        element: <Careers />,
      },
      {
        path: 'careers/:careerId',
        element: <Career />
      },
    ]
  },
  {
    path: '/sigin',
    element: <Login />
  }
])