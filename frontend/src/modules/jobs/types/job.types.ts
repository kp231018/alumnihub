/**
 * Job Type Definitions
 * Defines the core data structure for job postings
 */

export type JobType = 'Internship' | 'Full-time';

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: JobType;
  description: string;
  requirements: string[];
  salary?: string;
  postedDate: string;
}

export interface JobFilters {
  type: JobType | 'All';
  location: string;
}
