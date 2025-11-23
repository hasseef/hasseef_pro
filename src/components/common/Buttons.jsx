import React from "react";

export const PrimaryButton = ({ children }) => (
  <button className="px-4 py-2 rounded-xl text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-700 transition">
    {children}
  </button>
);

export const OutlineButton = ({ children }) => (
  <button className="px-4 py-2 rounded-xl text-sm font-medium border border-gray-200 text-gray-700 hover:bg-gray-50 transition">
    {children}
  </button>
);
