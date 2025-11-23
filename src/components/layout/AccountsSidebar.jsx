import React from "react";

export const AccountsSidebar = ({ accounts, activeId, onChange }) => {
  return (
    <aside className="w-full md:w-64 flex-shrink-0">
      <div className="rounded-lg border border-brand-border bg-white p-3 md:p-4 space-y-2">
        <h2 className="text-xs md:text-sm font-semibold text-brand-text mb-1">
          حسابات منصة حصيف
        </h2>
        <div className="flex flex-col gap-1 max-h-[400px] overflow-y-auto">
          {accounts.map((acc) => (
            <button
              key={acc.id}
              onClick={() => onChange(acc.id)}
              className={`text-right text-[11px] md:text-xs px-2 py-1.5 rounded-md border transition ${
                acc.id === activeId
                  ? "bg-brand-green text-white border-brand-green"
                  : "bg-white text-brand-text border-brand-border hover:bg-brand-light"
              }`}
            >
              <div className="font-semibold">{acc.label}</div>
              <div className="text-[10px] opacity-80">{acc.typeLabel}</div>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};
