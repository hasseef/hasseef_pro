import React from "react";

export const AccountsSidebar = ({ accounts, activeId, onChange }) => {
  return (
    <aside className="md:w-64 flex-shrink-0 space-y-3">
      <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3 md:p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-slate-300">
            حسابات المنصة
          </span>
          <span className="text-[10px] text-slate-500">
            منصة متعددة الأطراف
          </span>
        </div>
        <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-1">
          {accounts.map((acc) => (
            <button
              key={acc.id}
              onClick={() => onChange(acc.id)}
              className={`flex-1 md:flex-none text-right px-3 py-2 rounded-xl border text-[11px] md:text-xs transition whitespace-nowrap ${
                activeId === acc.id
                  ? "border-emerald-500 bg-emerald-500/10 text-emerald-300 shadow-sm"
                  : "border-slate-800 bg-slate-900/60 text-slate-200 hover:bg-slate-900"
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
