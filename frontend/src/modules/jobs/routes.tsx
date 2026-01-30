/**
 * Jobs Module Routes
 * Defines all routes for the jobs module
 */

import { RouteObject } from 'react-router-dom';
import { JobsListPage } from './pages/JobsListPage';
import { JobDetailsPage } from './pages/JobDetailsPage';

export const jobsRoutes: RouteObject[] = [
  {
    path: '/jobs',
    children: [
      {
        index: true,
        element: <JobsListPage />,
      },
      {
        path: ':id',
        element: <JobDetailsPage />,
      },
    ],
  },
];
