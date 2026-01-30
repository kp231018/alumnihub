/**
 * JobDetailsPage Component
 * Displays full details for a single job posting
 */

import { useParams, useNavigate } from 'react-router-dom';
import { useMemo, useState, useEffect } from 'react';
import { MOCK_JOBS } from '../data/jobs.mock';
import { EmptyState } from '../components/EmptyState';
import Navbar from '../../../components/Navbar';

export const JobDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [sectionsVisible, setSectionsVisible] = useState({ header: false, description: false, requirements: false });

  // Find the job by ID
  const job = useMemo(() => {
    return MOCK_JOBS.find((j) => j.id === id);
  }, [id]);

  useEffect(() => {
    // Sequential section reveal
    const timers = [
      setTimeout(() => setSectionsVisible(prev => ({ ...prev, header: true })), 50),
      setTimeout(() => setSectionsVisible(prev => ({ ...prev, description: true })), 150),
      setTimeout(() => setSectionsVisible(prev => ({ ...prev, requirements: true })), 250)
    ];
    return () => timers.forEach(clearTimeout);
  }, [id]);

  // Handle Apply Now action
  const handleApply = () => {
    alert(`Application submitted for: ${job?.title}\n\nThis is a demo action. In production, this would redirect to an application form.`);
  };

  // Handle 404 - Job not found
  if (!job) {
    return (
      <div style={{ minHeight: '100vh', background: '#e8ecf1', display: 'flex', flexDirection: 'column' }}>
        <Navbar showAuthButtons={false} />
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
          <div style={{ textAlign: 'center' }}>
            <EmptyState message="Job not found" icon="🔍" />
            <button
              onClick={() => navigate('/jobs')}
              style={{
                marginTop: '1.5rem',
                padding: '0.75rem 1.5rem',
                background: '#1b263b',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '0.9375rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#0d1b2a'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#1b263b'}
            >
              ← Back to Jobs
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Get badge styles based on job type
  const getBadgeStyles = () => {
    return job.type === 'Internship'
      ? { background: '#fef3c7', color: '#d97706', border: '1px solid #fde68a' }
      : { background: '#d1fae5', color: '#059669', border: '1px solid #a7f3d0' };
  };

  return (
    <div style={{ minHeight: '100vh', background: '#e8ecf1', fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif" }}>
      <Navbar showAuthButtons={false} />

      {/* Back Navigation */}
      <div style={{ background: 'white', borderBottom: '1px solid #e5e7eb', position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '1rem 2rem' }}>
          <button
            onClick={() => navigate('/jobs')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'none',
              border: 'none',
              color: '#415a77',
              fontSize: '0.9375rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              padding: '0.5rem',
              margin: '-0.5rem',
              borderRadius: '6px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#0d1b2a';
              e.currentTarget.style.background = '#f5f7fa';
              e.currentTarget.style.transform = 'translateX(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#415a77';
              e.currentTarget.style.background = 'none';
              e.currentTarget.style.transform = 'translateX(0)';
            }}
          >
            <span style={{ fontSize: '1.25rem', transition: 'transform 0.2s ease' }}>←</span>
            <span style={{ position: 'relative' }}>
              Back to Jobs
              <span style={{
                position: 'absolute',
                bottom: '-2px',
                left: 0,
                width: '0%',
                height: '1px',
                background: '#0d1b2a',
                transition: 'width 0.2s ease'
              }} />
            </span>
          </button>
        </div>
      </div>

      {/* Job Details Content */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem' }}>
        <div style={{
          background: 'white',
          borderRadius: '12px',
          border: '1px solid #e5e7eb',
          boxShadow: '0 2px 4px rgba(27, 38, 59, 0.06)',
          overflow: 'hidden'
        }}>
          {/* Job Header */}
          <div style={{ 
            padding: '2rem', 
            borderBottom: '1px solid #e5e7eb',
            opacity: sectionsVisible.header ? 1 : 0,
            transform: sectionsVisible.header ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '250px' }}>
                  <h1 style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: '#0d1b2a',
                    margin: '0 0 0.5rem 0',
                    lineHeight: '1.3'
                  }}>
                    {job.title}
                  </h1>
                  <p style={{
                    fontSize: '1.125rem',
                    color: '#778da9',
                    margin: '0',
                    fontWeight: '500'
                  }}>
                    {job.company}
                  </p>
                </div>

                {/* Apply Button (Desktop) */}
                <button
                  onClick={handleApply}
                  style={{
                    padding: '0.875rem 2rem',
                    background: '#1b263b',
                    color: 'white',
                    border: '2px solid transparent',
                    borderRadius: '8px',
                    fontSize: '0.9375rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 2px 8px rgba(27, 38, 59, 0.2)',
                    whiteSpace: 'nowrap',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#0d1b2a';
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(27, 38, 59, 0.3)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#1b263b';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(27, 38, 59, 0.2)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  onMouseDown={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(0.97)';
                  }}
                  onMouseUp={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px) scale(1)';
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#415a77';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(27, 38, 59, 0.2), 0 0 0 3px rgba(65, 90, 119, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(27, 38, 59, 0.2)';
                  }}
                >
                  Apply Now
                </button>
              </div>
            </div>

            {/* Job Meta Info */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9375rem', color: '#415a77' }}>
                <span style={{ fontSize: '1rem' }}>📍</span>
                <span style={{ fontWeight: '500' }}>{job.location}</span>
              </div>

              {job.salary && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9375rem', color: '#415a77' }}>
                  <span style={{ fontSize: '1rem' }}>💰</span>
                  <span style={{ fontWeight: '500' }}>{job.salary}</span>
                </div>
              )}

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9375rem', color: '#415a77' }}>
                <span style={{ fontSize: '1rem' }}>📅</span>
                <span style={{ fontWeight: '500' }}>
                  Posted {new Date(job.postedDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
            </div>

            {/* Job Type Badge */}
            <div>
              <span style={{
                ...getBadgeStyles(),
                display: 'inline-block',
                padding: '0.5rem 1rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: '600'
              }}>
                {job.type}
              </span>
            </div>
          </div>

          {/* Job Description */}
          <div style={{ 
            padding: '2rem', 
            borderBottom: '1px solid #e5e7eb',
            opacity: sectionsVisible.description ? 1 : 0,
            transform: sectionsVisible.description ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#0d1b2a',
              margin: '0 0 1rem 0'
            }}>
              About the Role
            </h2>
            <p style={{
              color: '#415a77',
              lineHeight: '1.7',
              whiteSpace: 'pre-line',
              fontSize: '0.9375rem'
            }}>
              {job.description}
            </p>
          </div>

          {/* Job Requirements */}
          <div style={{ 
            padding: '2rem',
            opacity: sectionsVisible.requirements ? 1 : 0,
            transform: sectionsVisible.requirements ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#0d1b2a',
              margin: '0 0 1rem 0'
            }}>
              Requirements
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {job.requirements.map((requirement, index) => (
                <li
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    marginBottom: '0.875rem',
                    color: '#415a77',
                    fontSize: '0.9375rem',
                    lineHeight: '1.6'
                  }}
                >
                  <span style={{ color: '#059669', flexShrink: 0, marginTop: '0.125rem', fontWeight: 'bold' }}>✓</span>
                  <span>{requirement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Additional Info Card */}
        <div style={{
          marginTop: '1.5rem',
          background: '#f5f7fa',
          border: '1px solid #e3eaf2',
          borderRadius: '12px',
          padding: '1.5rem'
        }}>
          <h3 style={{
            fontSize: '0.9375rem',
            fontWeight: '600',
            color: '#0d1b2a',
            margin: '0 0 0.75rem 0',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span>ℹ️</span>
            <span>Application Tips</span>
          </h3>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            fontSize: '0.875rem',
            color: '#415a77',
            lineHeight: '1.8'
          }}>
            <li>• Tailor your resume to match the job requirements</li>
            <li>• Highlight relevant projects and experience</li>
            <li>• Prepare for technical and behavioral interviews</li>
            <li>• Research the company culture and values</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
