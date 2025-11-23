import React from "react";

export const PrimaryButton = ({ children, className = "", ...props }) => (
  <button
    className={`inline-flex items-center justify-center px-4 py-2 rounded-md text-xs md:text-sm font-semibold bg-brand-green text-white hover:bg-emerald-700 transition ${className}`}
    {...props}
  >
    {children}
  </button>
);

export const GhostButton = ({ children, className = "", ...props }) => (
  <button
    className={`inline-flex items-center justify-center px-3 py-2 rounded-md text-xs md:text-sm font-medium border border-brand-border text-brand-text bg-white hover:bg-brand-light transition ${className}`}
    {...props}
  >
    {children}
  </button>
);
