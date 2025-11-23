import React from "react";

export const Pill = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    className={`px-3 py-1 rounded-full text-xs md:text-sm border transition ${
      active
        ? "bg-emerald-500 border-emerald-500 text-white shadow-sm"
        : "bg-slate-900/60 border-slate-700 text-slate-200 hover:bg-slate-800"
    }`}
  >
    {children}
  </button>
);
