import React, { useMemo, useState } from 'react';
import Navbar from '../components/Navbar';
import ProfileField from '../components/profile/ProfileField';
import ProfileSection from '../components/profile/ProfileSection';
import '../styles/AlumniDashboard.css';
import '../styles/Profile.css';

const initialProfile = {
  fullName: 'Guest User',
  role: 'Student',
  email: 'guest@example.com',
  phone: '',
  department: 'Computer Science',
  year: '3rd Year',
  rollNumber: '',
  linkedin: '',
  github: '',
  twitter: '',
  status: 'active', // 'active' | 'suspended' | 'blocked'
  statusReason: '',
};

const Profile = () => {
  const [profile, setProfile] = useState(() => {
    try {
      const stored = localStorage.getItem('profile');
      return stored ? JSON.parse(stored) : initialProfile;
    } catch {
      return initialProfile;
    }
  });
  const [originalProfile, setOriginalProfile] = useState(profile);
  const [isEditing, setIsEditing] = useState(false);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [saveStatus, setSaveStatus] = useState(null);

  const validateField = (name, value) => {
    let error = '';
    const trimmed = typeof value === 'string' ? value.trim() : value;

    if (['fullName', 'email', 'department'].includes(name) && !trimmed) {
      error = 'This field is required.';
    }

    if (name === 'email' && trimmed) {
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(trimmed)) {
        error = 'Enter a valid email address.';
      }
    }

    if (name === 'phone' && trimmed) {
      const phoneRegex = /^[0-9+\-\s()]{7,}$/;
      if (!phoneRegex.test(trimmed)) {
        error = 'Enter a valid phone number.';
      }
    }

    if (name === 'statusReason') {
      const status = profile.status || 'active';
      if (status !== 'active' && !trimmed) {
        error = 'Reason is required when account is suspended or blocked.';
      }
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
    if (errors[name]) {
      validateField(name, value);
    }
    setSaveStatus(null);
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, profile[name]);
  };

  const hasChanges = useMemo(
    () => JSON.stringify(profile) !== JSON.stringify(originalProfile),
    [profile, originalProfile]
  );

  const hasErrors = useMemo(
    () => Object.values(errors).some(Boolean),
    [errors]
  );

  const canSave = isEditing && hasChanges && !hasErrors;

  const handleEditToggle = () => {
    setIsEditing(true);
    setSaveStatus(null);
  };

  const handleCancel = () => {
    setProfile(originalProfile);
    setErrors({});
    setTouched({});
    setIsEditing(false);
    setSaveStatus(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields before saving
    const requiredFields = ['fullName', 'email', 'department'];
    let hasLocalError = false;

    requiredFields.forEach((field) => {
      const error = validateField(field, profile[field]);
      if (error) hasLocalError = true;
    });

    if (hasLocalError || !hasChanges) {
      return;
    }

    setOriginalProfile(profile);
    setIsEditing(false);
    setSaveStatus('success');

    try {
      localStorage.setItem('profile', JSON.stringify(profile));
    } catch {
      // ignore storage failures for now
    }
  };

  const initials = useMemo(
    () =>
      profile.fullName
        .split(' ')
        .filter(Boolean)
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2),
    [profile.fullName]
  );

  return (
    <div className="alumni-dashboard">
      <Navbar />

      <main className="profile-main">
        <section className="dashboard-hero profile-hero">
          <div className="hero-content-wrapper profile-hero-wrapper">
            <div className="hero-left">
              <h1 className="hero-title">Profile</h1>
              <p className="hero-subtitle">
                Manage your personal, academic, and social information.
              </p>
              <p className="profile-hero-meta">
                {profile.fullName} • {profile.role || 'Member'}
                {profile.status && profile.status !== 'active' && (
                  <span className={`profile-status-chip profile-status-${profile.status}`}>
                    {profile.status === 'suspended' ? 'Suspended' : 'Blocked'}
                  </span>
                )}
              </p>
            </div>
            <div className="hero-avatar profile-avatar-block">
              <div className="avatar-circle">{initials}</div>
              <p className="profile-avatar-note">Photo upload coming soon</p>
            </div>
            <div className="profile-hero-actions">
              {!isEditing ? (
                <button
                  type="button"
                  className="hero-cta-primary profile-edit-button"
                  onClick={handleEditToggle}
                >
                  Edit Profile
                </button>
              ) : (
                <div className="profile-edit-actions">
                  <button
                    type="button"
                    className="profile-secondary-button"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    form="profile-form"
                    className="hero-cta-primary profile-save-button"
                    disabled={!canSave}
                  >
                    Save Changes
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="main-content-section profile-content-section">
          {saveStatus === 'success' && (
            <div className="profile-success-banner">
              Profile updated successfully.
            </div>
          )}

          {profile.status && profile.status !== 'active' && (
            <div className={`profile-status-banner profile-status-banner-${profile.status}`}>
              <div className="profile-status-banner-title">
                {profile.status === 'suspended' ? 'Account Suspended' : 'Account Blocked'}
              </div>
              <p className="profile-status-banner-text">
                {profile.statusReason
                  ? profile.statusReason
                  : 'This account has been restricted by an administrator.'}
              </p>
            </div>
          )}

          <form
            id="profile-form"
            className="content-container profile-form"
            onSubmit={handleSubmit}
          >
            <div className="content-left">
              <ProfileSection title="Personal Information">
                <div className="profile-grid">
                  <ProfileField
                    label="Full Name"
                    name="fullName"
                    value={profile.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    editable={isEditing}
                    required
                    placeholder="Enter your full name"
                    error={touched.fullName && errors.fullName}
                  />
                  <ProfileField
                    label="Email"
                    name="email"
                    type="email"
                    value={profile.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    editable={isEditing}
                    required
                    placeholder="you@example.com"
                    error={touched.email && errors.email}
                  />
                  <ProfileField
                    label="Phone"
                    name="phone"
                    type="tel"
                    value={profile.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    editable={isEditing}
                    placeholder="+91 98765 43210"
                    error={touched.phone && errors.phone}
                  />
                </div>
              </ProfileSection>

              <ProfileSection title="Academic Information">
                <div className="profile-grid">
                  <ProfileField
                    label="Department"
                    name="department"
                    value={profile.department}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    editable={isEditing}
                    required
                    placeholder="e.g. Computer Science"
                    error={touched.department && errors.department}
                  />
                  <ProfileField
                    label="Year"
                    name="year"
                    value={profile.year}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    editable={isEditing}
                    placeholder="e.g. 3rd Year"
                  />
                  <ProfileField
                    label="Roll Number"
                    name="rollNumber"
                    value={profile.rollNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    editable={isEditing}
                    placeholder="Institute roll number"
                  />
                </div>
              </ProfileSection>
            </div>

            <div className="content-right">
              <ProfileSection title="Social Links">
                <div className="profile-grid-single">
                  <ProfileField
                    label="LinkedIn"
                    name="linkedin"
                    value={profile.linkedin}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    editable={isEditing}
                    placeholder="https://linkedin.com/in/username"
                  />
                  <ProfileField
                    label="GitHub"
                    name="github"
                    value={profile.github}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    editable={isEditing}
                    placeholder="https://github.com/username"
                  />
                  <ProfileField
                    label="Twitter"
                    name="twitter"
                    value={profile.twitter}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    editable={isEditing}
                    placeholder="https://twitter.com/username"
                  />
                </div>
              </ProfileSection>

              <ProfileSection
                title="Account Status (Admin)"
                subtitle="Admin-only controls for suspending or blocking this profile. UI only; backend to be wired later."
              >
                <div className="profile-status-controls">
                  <div className="profile-status-options">
                    <label className="profile-status-option">
                      <input
                        type="radio"
                        name="status"
                        value="active"
                        checked={profile.status === 'active'}
                        onChange={handleChange}
                        disabled={!isEditing}
                      />
                      <span>Active</span>
                    </label>
                    <label className="profile-status-option">
                      <input
                        type="radio"
                        name="status"
                        value="suspended"
                        checked={profile.status === 'suspended'}
                        onChange={handleChange}
                        disabled={!isEditing}
                      />
                      <span>Suspended</span>
                    </label>
                    <label className="profile-status-option">
                      <input
                        type="radio"
                        name="status"
                        value="blocked"
                        checked={profile.status === 'blocked'}
                        onChange={handleChange}
                        disabled={!isEditing}
                      />
                      <span>Blocked</span>
                    </label>
                  </div>

                  <div className="profile-status-reason">
                    <label className="profile-field-label" htmlFor="statusReason">
                      Admin Reason
                      {(profile.status === 'suspended' || profile.status === 'blocked') && (
                        <span className="profile-field-required">*</span>
                      )}
                    </label>
                    <textarea
                      id="statusReason"
                      name="statusReason"
                      className={`profile-status-textarea ${
                        touched.statusReason && errors.statusReason ? 'profile-field-input-error' : ''
                      }`}
                      value={profile.statusReason}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Explain why this profile was suspended or blocked (visible to the user)."
                      disabled={!isEditing}
                    />
                    {touched.statusReason && errors.statusReason && (
                      <p className="profile-field-error">{errors.statusReason}</p>
                    )}
                  </div>
                </div>
              </ProfileSection>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Profile;

