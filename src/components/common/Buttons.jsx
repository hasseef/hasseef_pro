import React from "react";

export const PrimaryButton = ({ children, className = "", ...props }) => (
  <button
    className={`inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs md:text-sm font-medium bg-emerald-500 text-white hover:bg-emerald-600 transition shadow-sm ${className}`}
    {...props}
  >
    {children}
  </button>
);

export const GhostButton = ({ children, className = "", ...props }) => (
  <button
    className={`inline-flex items-center justify-center px-3 py-1.5 rounded-xl text-xs md:text-sm border border-slate-700 text-slate-200 hover:bg-slate-800 transition ${className}`}
    {...props}
  >
    {children}
  </button>
);
