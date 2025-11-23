import React from "react";

export const Header = () => {
  return (
    <header className="w-full border-b border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold text-lg">
            ح
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-gray-900 text-sm md:text-base">
              منصة حصيف الوطنية
            </span>
            <span className="text-xs text-gray-500">
              برنامج شباب المملكة حصيف الوطني – حلول صائبة يقترح فعلها
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="hidden md:inline-flex px-3 py-1.5 rounded-xl border border-gray-200 text-xs text-gray-700">
            مركز المساعدة
          </button>
          <button className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-600">
            ر
          </button>
        </div>
      </div>
    </header>
  );
};
