import React from "react";

export const Sidebar = ({ accounts, activeAccountId, onChangeAccount }) => {
  return (
    <aside className="md:w-64 flex-shrink-0 space-y-3">
      <div className="rounded-2xl border border-gray-100 bg-white p-3 md:p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-gray-600">الحسابات</span>
          <span className="text-[10px] text-gray-400">منصة متعددة الأطراف</span>
        </div>
        <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-1">
          {accounts.map((account) => (
            <button
              key={account.id}
              onClick={() => onChangeAccount(account.id)}
              className={`flex-1 md:flex-none text-right px-3 py-2 rounded-xl border text-xs md:text-sm transition whitespace-nowrap ${
                activeAccountId === account.id
                  ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                  : "border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-700"
              }`}
            >
              {account.label}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};
