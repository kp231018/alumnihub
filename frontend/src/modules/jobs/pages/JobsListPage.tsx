/**
 * JobsListPage Component
 * Main jobs listing page with filtering functionality
 */

import { useState, useMemo, useEffect } from 'react';
import { JobCard } from '../components/JobCard';
import { JobFilters } from '../components/JobFilters';
import { EmptyState } from '../components/EmptyState';
import { MOCK_JOBS, getUniqueLocations, getJobTypes } from '../data/jobs.mock';
import { JobFilters as JobFiltersType } from '../types/job.types';
import Navbar from '../../../components/Navbar';

export const JobsListPage = () => {
  const [isPageVisible, setIsPageVisible] = useState(false);
  
  // Filter state
  const [filters, setFilters] = useState<JobFiltersType>({
    type: 'All',
    location: 'All',
  });

  useEffect(() => {
    // Page entry animation
    const timer = setTimeout(() => setIsPageVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Get unique locations and job types for filter dropdowns
  const locations = useMemo(() => getUniqueLocations(), []);
  const jobTypes = useMemo(() => getJobTypes(), []);

  // Filter jobs based on current filters
  const filteredJobs = useMemo(() => {
    return MOCK_JOBS.filter((job) => {
      const typeMatch = filters.type === 'All' || job.type === filters.type;
      const locationMatch =
        filters.location === 'All' || job.location === filters.location;
      return typeMatch && locationMatch;
    });
  }, [filters]);

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#e8ecf1', 
      fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
      opacity: isPageVisible ? 1 : 0,
      transition: 'opacity 0.3s ease'
    }}>
      <Navbar showAuthButtons={false} />
      
      {/* Header Section - Matching Events Style */}
      <div style={{
        background: 'linear-gradient(135deg, #1b263b 0%, #243447 100%)',
        padding: '3rem 2rem',
        borderRadius: '0 0 16px 16px',
        boxShadow: '0 4px 12px rgba(13, 27, 42, 0.15)',
        marginBottom: '2rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            color: 'white',
            margin: '0 0 0.5rem 0',
            lineHeight: '1.2',
            letterSpacing: '-0.02em'
          }}>
            Job Opportunities
          </h1>
          <p style={{
            fontSize: '1.0625rem',
            color: 'rgba(224, 225, 221, 0.9)',
            margin: '0 0 1rem 0',
            lineHeight: '1.5'
          }}>
            Find your next career opportunity from our alumni network
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.875rem', color: 'rgba(224, 225, 221, 0.8)' }}>
            <span>{MOCK_JOBS.length} Total Jobs</span>
            <span style={{ opacity: 0.5 }}>•</span>
            <span>{filteredJobs.length} Matching</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem 3rem' }}>
        {/* Filters */}
        <JobFilters
          filters={filters}
          onFilterChange={setFilters}
          locations={locations}
          jobTypes={jobTypes}
        />

        {/* Jobs Grid or Empty State */}
        {filteredJobs.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5rem',
            marginTop: '1.5rem'
          }}>
            {filteredJobs.map((job, index) => (
              <JobCard key={job.id} job={job} index={index} />
            ))}
          </div>
        ) : (
          <EmptyState message="No jobs found matching your filters" />
        )}
      </div>
    </div>
  );
};
