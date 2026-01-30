import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../../components/Navbar';
import { getJobById } from '../data/jobsData';
import '../styles/jobs.css';

// Job details page – displays full information for a single job
const JobDetails = () => {
  const { id } = useParams();
  const job = getJobById(id);
  const handleApply = () => {
    // Dummy action for demo purposes
    alert('Application flow will be integrated here.');
  };

  return (
    <div className="jobs-details-page">
      <Navbar showAuthButtons={false} />
      <main className="jobs-details-layout">
        <Link to="/jobs" className="jobs-details-back">
          <span>←</span>
          <span>Back to jobs</span>
        </Link>

        {job ? (
          <article className="jobs-details-card">
            <header className="jobs-details-header">
              <div>
                <h1 className="jobs-details-title">{job.title}</h1>
                <p className="jobs-details-company">{job.company}</p>
                <div className="jobs-details-meta">
                  <span>📍 {job.location}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                </div>
              </div>
            </header>

            <section className="jobs-details-section">
              <h2 className="jobs-details-section-title">Role Overview</h2>
              <p className="jobs-details-description">{job.description}</p>
            </section>

            <section className="jobs-details-section">
              <h2 className="jobs-details-section-title">Requirements</h2>
              <ul className="jobs-details-list">
                {job.requirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <div className="jobs-details-actions">
              <button
                type="button"
                className="jobs-apply-button"
                onClick={handleApply}
              >
                Apply Now
              </button>
            </div>
          </article>
        ) : (
          <section className="jobs-details-empty">
            <h1 className="jobs-details-empty-title">Job not found</h1>
            <p className="jobs-details-empty-text">
              This job may have been removed or the link is incorrect. Browse the jobs list
              to explore current opportunities.
            </p>
          </section>
        )}
      </main>
    </div>
  );
};

export default JobDetails;

