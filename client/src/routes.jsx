import { createBrowserRouter } from "react-router-dom";
import Root from "./layouts/Root";
import Career from "./pages/Career";
import Careers from "./pages/Careers";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Posts from "./pages/Posts";
import Subject from "./pages/Subject";

export default createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Careers />,
      },
      {
        path: 'career/:careerId',
        element: <Career />
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
        path: 'subject/:subjectId',
        element: <Subject />
      },
    ]
  },
  {
    path: '/sigin',
    element: <Login />
  }
])