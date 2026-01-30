import React from 'react';
import { useNavigate } from 'react-router-dom';

// Presentational card for a single job
// Styling comes from jobs.css (jobs-card, jobs-card-header, etc.)
const JobCard = ({ job }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/jobs/${job.id}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <article
      className="jobs-card"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label={`${job.title} at ${job.company}`}
    >
      <div className="jobs-card-header">
        <div>
          <h3 className="jobs-card-title">{job.title}</h3>
          <p className="jobs-card-company">{job.company}</p>
        </div>
        <span className="jobs-card-pill">{job.type}</span>
      </div>

      <div className="jobs-card-meta">
        <span className="jobs-card-location">
          <span>📍</span>
          <span>{job.location}</span>
        </span>
      </div>
    </article>
  );
};

export default JobCard;

