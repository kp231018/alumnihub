/**
 * Jobs Module - Main Export File
 * Central export point for the entire jobs module
 */

// Routes
export { jobsRoutes } from './routes';

// Pages
export { JobsListPage } from './pages/JobsListPage';
export { JobDetailsPage } from './pages/JobDetailsPage';

// Components (if needed elsewhere in the app)
export { JobCard } from './components/JobCard';
export { JobFilters } from './components/JobFilters';
export { EmptyState } from './components/EmptyState';

// Types
export type { Job, JobType, JobFilters as JobFiltersType } from './types/job.types';

// Data (if needed for testing or other modules)
export { MOCK_JOBS, getUniqueLocations, getJobTypes } from './data/jobs.mock';
