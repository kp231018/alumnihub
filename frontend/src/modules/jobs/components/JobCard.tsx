/**
 * JobCard Component
 * Displays a summary card for a single job posting
 */

import { useNavigate } from 'react-router-dom';
import { Job } from '../types/job.types';
import { useState, useEffect } from 'react';

interface JobCardProps {
  job: Job;
  index?: number;
}

export const JobCard = ({ job, index = 0 }: JobCardProps) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Staggered entry animation
    const timer = setTimeout(() => setIsVisible(true), index * 50);
    return () => clearTimeout(timer);
  }, [index]);

  const handleClick = () => {
    navigate(`/jobs/${job.id}`);
  };

  // Get badge styles based on job type - matching site theme
  const getBadgeStyles = () => {
    return job.type === 'Internship'
      ? { background: '#fef3c7', color: '#d97706', border: '1px solid #fde68a' }
      : { background: '#d1fae5', color: '#059669', border: '1px solid #a7f3d0' };
  };

  return (
    <div
      onClick={handleClick}
      style={{
        background: 'white',
        border: '1px solid #e5e7eb',
        borderRadius: '12px',
        padding: '1.5rem',
        cursor: 'pointer',
        transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: '0 2px 4px rgba(27, 38, 59, 0.06)',
        position: 'relative',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        willChange: 'transform, opacity'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 12px 24px rgba(27, 38, 59, 0.15)';
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.borderColor = '#1b263b';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 2px 4px rgba(27, 38, 59, 0.06)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = '#e5e7eb';
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px) scale(0.98)';
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px) scale(1)';
      }}
    >
      {/* Job Type Badge - Top Right */}
      <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
        <span style={{
          ...getBadgeStyles(),
          padding: '0.375rem 0.75rem',
          borderRadius: '9999px',
          fontSize: '0.75rem',
          fontWeight: '600'
        }}>
          {job.type}
        </span>
      </div>

      {/* Job Title */}
      <h3 style={{
        fontSize: '1.25rem',
        fontWeight: '700',
        color: '#0d1b2a',
        margin: '0 0 0.5rem 0',
        lineHeight: '1.4',
        paddingRight: '6rem',
        transition: 'color 0.2s ease'
      }}>
        {job.title}
      </h3>

      {/* Company Name */}
      <p style={{
        fontSize: '0.875rem',
        color: '#778da9',
        margin: '0 0 1rem 0',
        fontWeight: '500',
        letterSpacing: '0.01em'
      }}>
        {job.company}
      </p>

      {/* Job Meta Information */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem', alignItems: 'center' }}>
        {/* Location */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8125rem', color: '#778da9' }}>
          <span style={{ fontSize: '0.875rem', opacity: 0.7 }}>📍</span>
          <span>{job.location}</span>
        </div>

        {/* Salary (if available) */}
        {job.salary && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8125rem', color: '#415a77', fontWeight: '600' }}>
            <span style={{ fontSize: '0.875rem', opacity: 0.8 }}>💰</span>
            <span>{job.salary}</span>
          </div>
        )}
      </div>

      {/* Posted Date */}
      <div style={{ fontSize: '0.75rem', color: '#778da9', marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid #e5e7eb' }}>
        Posted {new Date(job.postedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
      </div>
    </div>
  );
};
