import React from "react";

export const Pill = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    className={`px-3 py-1 rounded-full text-sm transition border ${
      active
        ? "bg-emerald-600 text-white border-emerald-600"
        : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
    }`}
  >
    {children}
  </button>
);
