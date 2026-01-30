/**
 * JobFilters Component
 * Provides filtering options for job listings
 */

import { JobFilters as JobFiltersType } from '../types/job.types';

interface JobFiltersProps {
  filters: JobFiltersType;
  onFilterChange: (filters: JobFiltersType) => void;
  locations: string[];
  jobTypes: string[];
}

export const JobFilters = ({
  filters,
  onFilterChange,
  locations,
  jobTypes,
}: JobFiltersProps) => {
  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({
      ...filters,
      type: e.target.value as JobFiltersType['type'],
    });
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({
      ...filters,
      location: e.target.value,
    });
  };

  const selectStyle: React.CSSProperties = {
    padding: '0.625rem 1rem',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '0.9375rem',
    color: '#0d1b2a',
    background: 'white',
    cursor: 'pointer',
    outline: 'none',
    transition: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
    fontFamily: 'inherit'
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: '12px',
      border: '1px solid #e5e7eb',
      padding: '1.5rem',
      marginBottom: '1.5rem',
      boxShadow: '0 2px 4px rgba(27, 38, 59, 0.06)'
    }}>
      <h3 style={{
        fontSize: '0.9375rem',
        fontWeight: '600',
        color: '#0d1b2a',
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        <span style={{ fontSize: '1rem' }}>🔍</span>
        <span>Filter Jobs</span>
      </h3>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem'
      }}>
        {/* Job Type Filter */}
        <div>
          <label
            htmlFor="jobType"
            style={{
              display: 'block',
              fontSize: '0.8125rem',
              fontWeight: '500',
              color: '#415a77',
              marginBottom: '0.5rem'
            }}
          >
            Job Type
          </label>
          <select
            id="jobType"
            value={filters.type}
            onChange={handleTypeChange}
            style={selectStyle}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#1b263b';
              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(27, 38, 59, 0.1)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#d1d5db';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {jobTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Location Filter */}
        <div>
          <label
            htmlFor="location"
            style={{
              display: 'block',
              fontSize: '0.8125rem',
              fontWeight: '500',
              color: '#415a77',
              marginBottom: '0.5rem'
            }}
          >
            Location
          </label>
          <select
            id="location"
            value={filters.location}
            onChange={handleLocationChange}
            style={selectStyle}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#1b263b';
              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(27, 38, 59, 0.1)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#d1d5db';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Active Filters Display */}
      {(filters.type !== 'All' || filters.location !== 'All') && (
        <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #e5e7eb' }}>
          <p style={{ fontSize: '0.8125rem', color: '#778da9', marginBottom: '0.5rem' }}>Active Filters:</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
            {filters.type !== 'All' && (
              <span style={{
                padding: '0.375rem 0.75rem',
                background: '#edf2f7',
                color: '#1b263b',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                fontWeight: '500'
              }}>
                {filters.type}
              </span>
            )}
            {filters.location !== 'All' && (
              <span style={{
                padding: '0.375rem 0.75rem',
                background: '#edf2f7',
                color: '#1b263b',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                fontWeight: '500'
              }}>
                📍 {filters.location}
              </span>
            )}
            <button
              onClick={() => onFilterChange({ type: 'All', location: 'All' })}
              style={{
                padding: '0.375rem 0.75rem',
                background: '#e0e1dd',
                color: '#415a77',
                border: 'none',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#d1d5db'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#e0e1dd'}
            >
              Clear All
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
