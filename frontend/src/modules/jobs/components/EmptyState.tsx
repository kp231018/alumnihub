/**
 * EmptyState Component
 * Displays when no jobs match the current filters or no data available
 */

import { useState, useEffect } from 'react';

interface EmptyStateProps {
  message?: string;
  icon?: string;
}

export const EmptyState = ({
  message = 'No jobs found',
  icon = '📭',
}: EmptyStateProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4rem 1rem',
      background: 'white',
      borderRadius: '12px',
      border: '1px solid #e5e7eb',
      marginTop: '1.5rem',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 0.4s ease, transform 0.4s ease'
    }}>
      <div style={{ 
        fontSize: '4rem', 
        marginBottom: '1rem',
        animation: 'gentleBounce 2s ease-in-out infinite',
        display: 'inline-block'
      }}>
        {icon}
      </div>
      <h3 style={{
        fontSize: '1.5rem',
        fontWeight: '600',
        color: '#0d1b2a',
        margin: '0 0 0.5rem 0'
      }}>
        {message}
      </h3>
      <p style={{
        color: '#778da9',
        textAlign: 'center',
        maxWidth: '28rem',
        fontSize: '0.9375rem',
        lineHeight: '1.6'
      }}>
        Try adjusting your filters or check back later for new opportunities.
      </p>
      <style>{`
        @keyframes gentleBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </div>
  );
};
