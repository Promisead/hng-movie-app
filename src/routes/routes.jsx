import * as React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Movie from '../pages/movie/Movie';
import HomePage from '../pages/homepage/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'movie/:movieId',
    element: <Movie />,
  },
]);

export default router;
