import React from "react";

export const DemoTable = ({ columns }) => (
  <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60">
    <table className="min-w-full text-xs md:text-sm text-right">
      <thead className="border-b border-slate-800 bg-slate-900/80">
        <tr>
          {columns.map((col) => (
            <th
              key={col}
              className="px-4 py-3 font-semibold text-slate-200 whitespace-nowrap"
            >
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[1, 2, 3].map((row) => (
          <tr
            key={row}
            className="border-t border-slate-800/80 hover:bg-slate-900/80"
          >
            {columns.map((col) => (
              <td
                key={col}
                className="px-4 py-3 text-slate-400 whitespace-nowrap"
              >
                ـ بيانات تجريبية لعرض الديمو ـ
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
