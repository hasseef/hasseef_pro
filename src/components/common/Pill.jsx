import React from "react";

export const Pill = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    className={`px-3 py-1 rounded-full text-xs md:text-sm border transition ${
      active
        ? "bg-brand-green text-white border-brand-green"
        : "bg-white text-brand-text border-brand-border hover:bg-brand-light"
    }`}
  >
    {children}
  </button>
);
