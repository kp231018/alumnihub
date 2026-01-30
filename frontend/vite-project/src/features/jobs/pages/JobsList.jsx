import React, { useMemo, useState } from 'react';
import Navbar from '../../../components/Navbar';
import { jobs } from '../data/jobsData';
import JobCard from '../components/JobCard';
import JobFilters from '../components/JobFilters';
import '../styles/jobs.css';

// Jobs list page – uses feature-scoped styles and data
const JobsList = () => {
  const [filters, setFilters] = useState({ type: '', location: '' });

  const locations = useMemo(
    () => Array.from(new Set(jobs.map((job) => job.location))).sort(),
    []
  );

  const types = useMemo(
    () => Array.from(new Set(jobs.map((job) => job.type))).sort(),
    []
  );

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesType = filters.type ? job.type === filters.type : true;
      const matchesLocation = filters.location ? job.location === filters.location : true;
      return matchesType && matchesLocation;
    });
  }, [filters]);

  return (
    <div className="jobs-page">
      <Navbar showAuthButtons={false} />

      <main className="jobs-layout">
        <header className="jobs-header">
          <div>
            <h1 className="jobs-title">Opportunities for You</h1>
            <p className="jobs-subtitle">
              Curated roles shared by alumni, hiring partners, and the placement cell.
            </p>
          </div>

          <div className="jobs-header-right">
            <JobFilters
              filters={filters}
              onFilterChange={setFilters}
              locations={locations}
              types={types}
            />
            <p className="jobs-count">{filteredJobs.length} roles found</p>
          </div>
        </header>

        {filteredJobs.length > 0 ? (
          <section className="jobs-grid" aria-label="Job listings">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </section>
        ) : (
          <section className="jobs-empty-state">
            <h2 className="jobs-empty-title">No roles match these filters yet</h2>
            <p className="jobs-empty-text">
              Try removing a filter or checking back later – new opportunities are added
              regularly.
            </p>
          </section>
        )}
      </main>
    </div>
  );
};

export default JobsList;

