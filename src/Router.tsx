import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
} from 'react-router-dom';
import Header from './components/Header';
import Home from './screen/Home';
import About from './screen/About';
import App from './App';
import NotFound from './screen/NotFound';
import ErrorComponent from './components/ErrorComponent';
import User from './screen/users/User';
import Followers from './screen/users/Followers';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'users/:userId',
        element: <User />,
        children: [
          {
            path: 'followers',
            element: <Followers />,
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
