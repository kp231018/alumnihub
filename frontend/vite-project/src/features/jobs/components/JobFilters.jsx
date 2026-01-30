import React from 'react';

// Filters for job type and location
const JobFilters = ({ filters, onFilterChange, locations, types }) => {
  const handleChange = (field) => (event) => {
    onFilterChange({ ...filters, [field]: event.target.value });
  };

  return (
    <div className="jobs-filters">
      <div className="jobs-filter-group">
        <label className="jobs-filter-label" htmlFor="jobType">
          Job Type
        </label>
        <select
          id="jobType"
          className="jobs-filter-select"
          value={filters.type}
          onChange={handleChange('type')}
        >
          <option value="">All types</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="jobs-filter-group">
        <label className="jobs-filter-label" htmlFor="location">
          Location
        </label>
        <select
          id="location"
          className="jobs-filter-select"
          value={filters.location}
          onChange={handleChange('location')}
        >
          <option value="">All locations</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default JobFilters;

