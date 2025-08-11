import React from 'react';

const Badge = ({ children, className, variant = 'secondary', ...props }) => (
  <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-teal-100 text-teal-800 ${className || ''}`} {...props}>
    {children}
  </span>
);

export default Badge;