import React from 'react';

const ProfileField = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  onBlur,
  editable,
  required = false,
  placeholder,
  error,
}) => {
  return (
    <div className="profile-field">
      <div className="profile-field-label-row">
        <label htmlFor={name} className="profile-field-label">
          {label}
          {required && <span className="profile-field-required">*</span>}
        </label>
        {!editable && value && (
          <span className="profile-field-chip">View only</span>
        )}
      </div>

      {editable ? (
        <input
          id={name}
          name={name}
          type={type}
          className={`profile-field-input ${error ? 'profile-field-input-error' : ''}`}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
        />
      ) : (
        <p className="profile-field-value">
          {value || <span className="profile-field-placeholder">Not set</span>}
        </p>
      )}

      {error && <p className="profile-field-error">{error}</p>}
    </div>
  );
};

export default ProfileField;

