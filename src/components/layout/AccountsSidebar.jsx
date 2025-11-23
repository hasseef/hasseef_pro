import React from "react";

export const AccountsSidebar = ({ accounts, activeId, onChange }) => {
  return (
    <aside className="md:w-64 flex-shrink-0 space-y-3">
      <div className="rounded-lg border border-brand-border bg-white p-3 md:p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-brand-text">
            حسابات المنصة
          </span>
          <span className="text-[10px] text-gray-500">
            منصة متعددة الأطراف
          </span>
        </div>
        <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-1">
          {accounts.map((acc) => (
            <button
              key={acc.id}
              onClick={() => onChange(acc.id)}
              className={`flex-1 md:flex-none text-right px-3 py-2 rounded-md border text-[11px] md:text-xs transition whitespace-nowrap ${
                activeId === acc.id
                  ? "border-brand-green bg-brand-light text-brand-green"
                  : "border-brand-border bg-white text-brand-text hover:bg-gray-50"
              }`}
            >
              {acc.label}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};
