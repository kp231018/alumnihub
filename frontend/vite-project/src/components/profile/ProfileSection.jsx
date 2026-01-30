import React from 'react';

const ProfileSection = ({ title, subtitle, children }) => {
  return (
    <section className="content-card profile-section-card">
      <header className="card-header profile-section-header">
        <div className="card-title-wrapper">
          <div className="card-icon profile-section-icon">⚙️</div>
          <div>
            <h3 className="card-title">{title}</h3>
            {subtitle && (
              <p className="profile-section-subtitle">{subtitle}</p>
            )}
          </div>
        </div>
      </header>
      <div className="card-content profile-section-content">{children}</div>
    </section>
  );
};

export default ProfileSection;

