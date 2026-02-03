/**
 * Loader Component
 * Loading spinner for async operations
 */

import React from 'react';

function Loader({ size = 'medium', message = '' }) {
  const sizeClasses = {
    small: 'loader-sm',
    medium: '',
    large: 'loader-lg',
  };

  return (
    <div className="loader-container flex flex-col items-center justify-center">
      <div className={`loader ${sizeClasses[size] || ''}`}></div>
      {message && <p className="loader-message mt-2 text-sm text-neutral-600">{message}</p>}
    </div>
  );
}

export default Loader;

